#!/bin/bash
#这个脚本可以用于一些通用库的安装
#chmod +x configure.sh
function preInstall
{
    #install node
    if [ $1 -eq 1 -a "`whereis node`" == "node:" ]; then
        echo "node is missing, install ..."
        apt-get update
        apt-get install -y python-software-properties software-properties-common
        add-apt-repository ppa:chris-lea/node.js
        apt-get update
        apt-get install nodejs

        #switch to version
        npm install n -g
        n 0.12.0
        echo "node install success!"
        echo `node -v`
    fi

    #install pm2
    if [ $2 -eq 1 -a "`whereis pm2`" == "pm2:" ]; then
        echo "pm2 is missing, install ..."
        npm install pm2 -g
        echo "pm2 install success!"
    fi

    #install mysql
    if [ $3 -eq 1 -a "`whereis mysql`" == "mysql:" ]; then
        echo "mysql is missing, install ..."
        apt-get install mysql-server mysql-client libmysqlclient-dev
        echo "mysql install success!"
    fi

    #install redis
    if [ $4 -eq 1 -a "`whereis redis`" == "redis:" ]; then
        echo "redis is missing, install ..."
        apt-get install -y python-software-properties
        add-apt-repository -y ppa:rwky/redis
        apt-get update
        apt-get install -y redis-server
        echo "redis install success!"
    fi

    #install mongodb
    if [ $5 -eq 1 -a "`whereis mongodb`" == "mongodb:" ]; then
        echo "mongodb is missing, install ..."
        apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
        deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen
        apt-get update
        apt-get install mongodb-10gen
        echo "mongodb install success!"
    fi
}

function parseArgs
{
	declare -i node=0
	declare -i pm2=0
	declare -i mongodb=0
	declare -i redis=0
	declare -i mysql=0

	while getopts "npmrsh" opt_name; do
		case "$opt_name" in
			"n") node=1;;
			"p") pm2=1;;
			"m") mongodb=1;;
			"r") redis=1;;
			"s") mysql=1;;
			"h")
				echo ""
				echo "		--- Usage ---"
				echo "	-n = node"
				echo "	-p = pm2"
				echo "	-m = mongodb"
				echo "	-r = redis"
				echo "	-s = mysql"
				echo "	-h = print help"
				echo ""
				return 0;;
			"?") echo "Unknown option $opt_name"; return 1;;
		esac
	done

    preInstall $node $pm2 $mongodb $redis $mysql
}

#main
if [ "root" != `whoami` ]; then
    echo "root required!"
    echo "fail!"
    exit 1
fi

if [ $# -eq 0 ]; then
    parseArgs -h
else
    parseArgs $1
fi
exit 0
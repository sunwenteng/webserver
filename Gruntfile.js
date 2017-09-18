"use strict";

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 获取当前目录git信息
        gitinfo: {
            options: {
                cwd: './'
            }
        },

        "git-describe": {
            "options": {
                template: '{%=tag%}-{%=since%}-g{%=object%}'
            },
            "your_target": {
                // Target-specific file lists and/or options go here.
            }
        },

        svninfo: {
            options: {
                cwd: './src/config/data/'
            }
        },

        // ts 编译
        ts: {
            // use to override the default options, See: http://gruntjs.com/configuring-tasks#options
            // these are the default options to the typescript compiler for grunt-ts:
            // see `tsc --help` for a list of supported options.
            options: {
                compile: true,                 // perform compilation. [true (default) | false]
                comments: false,               // same as !removeComments. [true | false (default)]
                target: 'es5',                 // target javascript language. [es3 | es5 (grunt-ts default) | es6]
                sourceMap: true,               // generate a source map for every output js file. [true (default) | false]
                sourceRoot: '',                // where to locate TypeScript files. [(default) '' == source ts location]
                mapRoot: 'bin',                   // where to locate .map.js files. [(default) '' == generated js location.]
                declaration: false,            // generate a declaration .d.ts file for every output js file. [true | false (default)]
                noImplicitAny: false,          // set to true to pass --noImplicitAny to the compiler. [true | false (default)]
                fast: "never",                  // see https://github.com/TypeStrong/grunt-ts/blob/master/docs/fast.md ["watch" (default) | "always" | "never"]
                compiler: './node_modules/grunt-ts/node_modules/typescript/bin/tsc'   //will use the specified compiler.
            },
            dev: {
                src: ["typings/tsd.d.ts", "src/**/*.ts", '!src/config/data/*.ts'],          // The source typescript files, http://gruntjs.com/configuring-tasks#files
                outDir: 'bin',             // If specified, generate an out.js file which is the merged js file
                // use to override the grunt-ts project options above for this target
                options: {
                    module: 'commonjs',
                    baseDir: 'src'
                }
            }
        },

        copy: {
            src2bin: {
                files: [
                    {
                        expand: true,
                        src: ['src/**/*.js', '!src/addons/**'],
                        dest: 'bin/'
                    },
                    {
                        expand: true,
                        src: 'src/**/*.json',
                        dest: 'bin/'
                    },
                    {
                        expand: true,
                        src: 'src/**/*.node',
                        dest: 'bin/'
                    },
                    {
                        expand: true,
                        src: 'src/shell/*',
                        dest: 'bin/'
                    },
                    {
                        expand: true,
                        src: 'src/config/redis/*',
                        dest: 'bin/'
                    }
                ]
            },

            uglify_files: {
                files: [
                    {
                        expand: true,
                        cwd: 'bin/',
                        src: ['src/**/*.json'],
                        dest: 'release/'
                    },
                    {
                        expand: true,
                        cwd: 'bin/',
                        src: ['src/**/*.node'],
                        dest: 'release/'
                    },
                    {
                        expand: true,
                        cwd: 'bin/',
                        src: ['src/config/redis/*'],
                        dest: 'release/'
                    },
                    {
                        expand: true,
                        cwd: 'bin/',
                        src: 'src/shell/*',
                        dest: 'release/'
                    }
                ]
            },

            node_modules: {
                files: [
                    {
                        expand: true,
                        cwd: './',
                        src: ['node_modules/**/*'],
                        dest: 'release'
                    }
                ]
            }
        },

        clean: {
            bin: {
                src: ['bin/**']
            },
            release: {
                src: ['release/**']
            }
        },

        // 代码加密
        uglify: {
            options: {
                // 可以尝试加入git信息
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd_hh:MM:ss") %> */\n\n' +
                '/*! git info\n' +
                ' * Current HEAD SHA: <%= gitinfo.local.branch.current.SHA %> \n' +
                ' * Current branch name: <%= gitinfo.local.branch.current.name %> \n' +
                ' * Last commit time: <%= gitinfo.local.branch.current.lastCommitTime %> \n' +
                ' * Last commit author: <%= gitinfo.local.branch.current.lastCommitAuthor %> \n' +
                '*/\n'
            },
            origin_js: {
                option: {
                    sourceMap: true,
                    mangle: true
                },
                files: {
                    /*"release/src/share/cmd.js": ['bin/src/share/cmd.js']*/
                }
            },
            ts_js: {
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: function (file) {
                        console.log(file);
                        return file + '.map';
                    },
                    exceptionsFiles: ['uglify-reserved.json']
                },
                files: [{
                    expand: true,
                    cwd: 'bin/',
                    src: ['src/**/*.js', 'index.js', '!src/**/share/**', '!src/test/**', '!src/shell/**'],
                    dest: 'release'
                }]
            }
        },

        compress: {
            source_config: {
                options: {
                    archive: 'archive/<%= gitinfo.local.branch.current.name %>/<%= pkg.name %>-<%= gitinfo.local.branch.current.name %>-<%= gitinfo.local.branch.current.shortSHA %>-<%= svninfo.rev %>.tar.gz',
                    mode: 'tgz'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'release',
                        src: ['**'],
                        dest: './'
                    }
                ]
            },

            node_modules: {
                options: {
                    archive: 'archive/node_modules/node_modules.tar.gz',
                    mode: 'tgz'
                },
                files: [
                    {
                        expand: true,
                        cwd: '',
                        src: ['node_modules/**'],
                        dest: './'
                    }
                ]
            },

            code: {
                options: {
                    archive: 'archive/source_code/<%= pkg.name %>-code-<%= gitinfo.local.branch.current.name %>-<%= gitinfo.local.branch.current.shortSHA %>.tar',
                    mode: 'tgz'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'release',
                        src: ['node_modules'],
                        dest: './'
                    }
                ]
            },

            config: {
                options: {
                    archive: 'archive/config_data/<%= pkg.name %>-config-<%= svn_info.config_data.revision %>.tar.gz',
                    mode: 'tgz'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/config/data',
                        src: ['*.json'],
                        dest: './'
                    }
                ]
            }
        },

        shell: {
            bash_bin: {
                command: [
                    'chmod +x bin/src/shell/*'
                ].join('&&')
            },
            bash_release: {
                command: [
                    'chmod +x release/src/shell/*'
                ].join('&&')
            },

            svn_up: {
                command: [
                    'svn up src/config/data --username bingo --password bingo'
                ].join('&&')
            },
            pbjs: {
                command: [
                    'node_modules/protobufjs/bin/pbjs src/share/cmd.proto -t=commonjs > src/share/cmd.js',
                ].join('&&')
            },
            "git": {
                command: function (option, arg1, arg2) {s
                    var statement = 'git ' + option + ' ' + arg1 + (arg2 ? ' ' + arg2 : '');
                    console.log(statement);
                    return statement;
                }
            }
        }
    });

    // 更新配置表编译ts文件，输出制bin目录下
    grunt.registerTask("compile", ["clean:bin", "shell:svn_up", "shell:pbjs", "copy:src2bin", "ts:dev", "shell:bash_bin"]);

    // 编译，加密
    grunt.registerTask("release", ["gitinfo", "clean:release", "compile", "uglify:ts_js", "uglify:origin_js", "copy:uglify_files"]);

    // 压缩bin/release文件夹（会添加git信息），输出至archive目录下
    grunt.registerTask("archive", ["svninfo", "release", "compress:source_config"]);

};
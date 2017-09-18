'use strict';

const log4js = require('log4js');
const util = require('util');
const mkdirp = require('mkdirp');

function getLineInfo() {
    return '';
}

class Log {
    constructor() {
        let _format = ':remote-addr :method :url :http-version :status :response-time ms';
        this.m_logger = log4js.connectLogger(this.m_logger, {format: _format});
    }

    init(path) {
        let logDir = path + '/logs/';
        mkdirp.sync(logDir);

        log4js.configure({
            appenders: [
                {
                    type: "dateFile",
                    filename: logDir + "/my.log",
                    pattern: ".yyyy-MM-dd",
                    layout: {
                        type: "pattern",
                        pattern: "%d{yyyy-MM-dd hh:mm:ss},%x{level},%x{line},%x{roleId},%x{content}",
                        tokens: {
                            line: () => {
                                return getLineInfo();
                            },
                            roleId: (log) => {
                                return log.data[0];
                            },
                            /* 此处 pattern 中使用 %x{content} 代替 %m 是为了支持 roleId */
                            content: (log) => {
                                return util.format.apply(util, log.data.slice(1));
                            },
                            level: (log) => {
                                switch (log.level.level) {
                                    case 5000   :
                                        return 1;   /* trace */
                                    case 10000  :
                                        return 1;   /* debug */
                                    case 20000  :
                                        return 2;   /* info */
                                    case 30000  :
                                        return 3;   /* warning */
                                    case 40000  :
                                        return 4;   /* error */
                                    case 50000  :
                                        return 4;   /* fatal */
                                }
                                return 0;
                            }

                        }
                    },
                    category: ["default"]
                },
                {
                    type: "console",
                    layout: {
                        type: "pattern",
                        /* 多加了颜色 */
                        pattern: "%[%d{yyyy-MM-dd hh:mm:ss},%p,%x{line},%x{roleId},%x{content}%]",
                        tokens: {
                            line: () => {
                                return getLineInfo();
                            },
                            roleId: (log) => {
                                return log.data[0];
                            },
                            /* 此处 pattern 中使用 %x{content} 代替 %m 是为了支持 roleId */
                            content: (log) => {
                                return util.format.apply(util, log.data.slice(1));
                            }
                        }
                    },
                    category: ["default"]
                }
            ]
            //replaceConsole: true
        });
        this.m_logger = log4js.getLogger('default');
        this.m_logger.setLevel(log4js.levels.DEBUG);
    }

    // user
    uInfo(roleId, message) {
        this.m_logger.info.apply(this.m_logger, [].slice.call(arguments));
    }

    uWarn(roleId, message) {
        this.m_logger.warn.apply(this.m_logger, [].slice.call(arguments));
    }

    uError(roleId, message) {
        this.m_logger.error.apply(this.m_logger, [].slice.call(arguments));
    }

    // system
    sDebug(message) {
        this.m_logger.debug.apply(this.m_logger, [0].concat([].slice.call(arguments)));
    }

    sInfo(message) {
        this.m_logger.info.apply(this.m_logger, [0].concat([].slice.call(arguments)));
    }

    sWarn(message) {
        this.m_logger.warn.apply(this.m_logger, [0].concat([].slice.call(arguments)));
    }

    sError(message) {
        this.m_logger.error.apply(this.m_logger, [0].concat([].slice.call(arguments)));
    }

    getLogger() {
        let _format = ':remote-addr :method :url :http-version :status :response-time ms';
        return log4js.connectLogger(this.m_logger, {format: _format});
    }
}

module.exports = new Log();
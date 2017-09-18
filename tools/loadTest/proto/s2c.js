module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "Protocol.S2C",
    "messages": [
        {
            "name": "LOGIN_SC_LOGIN_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 15000
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "cdk",
                    "id": 3
                }
            ]
        },
        {
            "name": "LOGIN_SC_SERVER_LIST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 15001
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_SERVER_INFO",
                    "name": "servers",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "notice",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "last_login_id",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_SERVER_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "server_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "server_name",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "can_login",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "status",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "level",
                            "id": 5,
                            "options": {
                                "default": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "LOGIN_SC_CHOOSE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 15002
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ip",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "port",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "role_id",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "res_server_addr",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "res_version",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "version",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "update_url",
                    "id": 9
                }
            ]
        },
        {
            "name": "LOGIN_SC_REGISTER_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 15003
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 2
                }
            ]
        },
        {
            "name": "LOGIN_SC_MODIFY_PASSWD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 15004
                    }
                },
                {
                    "rule": "required",
                    "type": "EModifyPassWDResult",
                    "name": "result",
                    "id": 2
                }
            ],
            "enums": [
                {
                    "name": "EModifyPassWDResult",
                    "values": [
                        {
                            "name": "E_MODIFY_PASSWD_RESULT_SUC",
                            "id": 0
                        },
                        {
                            "name": "E_MODIFY_PASSWD_RESULT_NOT_AUTH",
                            "id": 1
                        },
                        {
                            "name": "E_MODIFY_PASSWD_RESULT_FAILED",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "LOGIN_SC_PTR_GET_INFO_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 15005
                    }
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "result",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "auto_gm_id",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "account_id",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "server_ip_origin",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "uid",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "account",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "pwd_md5",
                    "id": 8
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "platformId",
                    "id": 10
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device",
                    "id": 11
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "deviceType",
                    "id": 12
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "open_uidi",
                    "id": 13
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "apple_udid",
                    "id": 14
                }
            ]
        },
        {
            "name": "LOGIN_SC_PTR_REGISTER_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 15006
                    }
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "result",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "auto_gm_id",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "role_id_ori",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "role_id",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "account",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "passwd",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "ip",
                    "id": 8
                }
            ]
        },
        {
            "name": "LOGIN_SC_CDK_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 15007
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ERROR_CODE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20000
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "code",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_INIT_BEGIN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20001
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "reconnect",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "progress",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "server_time",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "gmtoff",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zone",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "new_player",
                    "id": 7
                }
            ]
        },
        {
            "name": "SC_INIT_COMPLETE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20002
                    }
                }
            ]
        },
        {
            "name": "SC_OFFLINE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20003
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "reason",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_GM_COMMAND_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20004
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "result",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_TIME_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20005
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "server_time",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "gmtoff",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zone",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_ACCOUNT_PROGRESS_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20006
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "progress",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_MESSAGE_BEFORE_AUTH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20007
                    }
                }
            ]
        },
        {
            "name": "SC_FUNCTION_LOCK_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20008
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "lock_nums",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_FUNCTION_UNLOCK",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20009
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "lock_nums",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_RELAY_TYPE_CLOSE_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20010
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "relay_types",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_RELAY_TYPE_OPEN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20011
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "relay_types",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ROLE_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20020
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 2,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "exp",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gold",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "diamond",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stamina",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "energy",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "gm_auth",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "soul",
                    "id": 10,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "equip_dust",
                    "id": 11,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "travel_coin",
                    "id": 12,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "arena_coin",
                    "id": 13,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "hallow_dust",
                    "id": 14,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vip_lv",
                    "id": 15,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "diamond_pay",
                    "id": 16,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vip_exp",
                    "id": 17,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_NAME_CREATE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20021
                    }
                },
                {
                    "rule": "required",
                    "type": "ResultType",
                    "name": "res",
                    "id": 2
                }
            ],
            "enums": [
                {
                    "name": "ResultType",
                    "values": [
                        {
                            "name": "SUCCESS",
                            "id": 0
                        },
                        {
                            "name": "TOO_SHORT",
                            "id": 1
                        },
                        {
                            "name": "TOO_LONG",
                            "id": 2
                        },
                        {
                            "name": "DUPLICATE",
                            "id": 3
                        },
                        {
                            "name": "INVALID",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_TIMER_RESET",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20022
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stamina_last_refresh_time",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "energy_last_refresh_time",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_CREATE_ACCOUNT_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20023
                    }
                },
                {
                    "rule": "required",
                    "type": "ResultType",
                    "name": "res",
                    "id": 2
                }
            ],
            "enums": [
                {
                    "name": "ResultType",
                    "values": [
                        {
                            "name": "SUCCESS",
                            "id": 0
                        },
                        {
                            "name": "TOO_SHORT",
                            "id": 1
                        },
                        {
                            "name": "TOO_LONG",
                            "id": 2
                        },
                        {
                            "name": "DUPLICATE",
                            "id": 3
                        },
                        {
                            "name": "INVALID",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_GET_RANDOM_NAME_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20024
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_SYSTEM_OPTION_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20025
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "music",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "voice",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_CHANGE_NAME_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20026
                    }
                },
                {
                    "rule": "required",
                    "type": "ResultType",
                    "name": "res",
                    "id": 2
                }
            ],
            "enums": [
                {
                    "name": "ResultType",
                    "values": [
                        {
                            "name": "SUCCESS",
                            "id": 0
                        },
                        {
                            "name": "TOO_SHORT",
                            "id": 1
                        },
                        {
                            "name": "TOO_LONG",
                            "id": 2
                        },
                        {
                            "name": "DUPLICATE",
                            "id": 3
                        },
                        {
                            "name": "INVALID",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_TALISMAN_INFO",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hero_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "upgrade",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "adv",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_COAT",
                    "name": "coats",
                    "id": 5
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_COAT",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "up_lv",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "star_lv",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "exp",
                            "id": 5
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_PROP",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "STRUCT_REWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "role_exp",
                    "id": 1,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gold",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "diamond",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_ITEM",
                    "name": "items",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_HERO",
                    "name": "heroes",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_EQUIP",
                    "name": "equips",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stamina",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "energy",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_GEM",
                    "name": "gems",
                    "id": 9
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_TAL",
                    "name": "tals",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "soul",
                    "id": 11,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "equip_dust",
                    "id": 12,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "travel_coin",
                    "id": 13,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "daily_point",
                    "id": 14,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "arena_coin",
                    "id": 15,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_HALLOW",
                    "name": "hallows",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "hallow_dust",
                    "id": 17,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "crit_times",
                    "id": 18,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_WING",
                    "name": "wings",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "club_donate",
                    "id": 20,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "club_qual",
                    "id": 21,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "club_gold",
                    "id": 22,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "club_growth",
                    "id": 23,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "donate_progress",
                    "id": 24,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "achieve_point",
                    "id": 25,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_FASHION",
                    "name": "fashions",
                    "id": 26
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD_TITLE",
                    "name": "titles",
                    "id": 27
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vip_exp",
                    "id": 28,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_REWARD_ITEM",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qty",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_REWARD_HERO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "STRUCT_REWARD_EQUIP",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "STRUCT_REWARD_HALLOW",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "qty",
                            "id": 2,
                            "options": {
                                "default": 1
                            }
                        }
                    ]
                },
                {
                    "name": "STRUCT_REWARD_GEM",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qty",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_REWARD_TAL",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "STRUCT_REWARD_WING",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "STRUCT_REWARD_FASHION",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "STRUCT_REWARD_TITLE",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_GUIDE_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20027
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "complete_guide_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "guiding_id",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "guiding_step",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "special_numbers",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_complete_first_fight",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_GUIDE_SET_STEP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20028
                    }
                }
            ]
        },
        {
            "name": "SC_GIFT_CODE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20029
                    }
                },
                {
                    "rule": "required",
                    "type": "Result_t",
                    "name": "result_type",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ],
            "enums": [
                {
                    "name": "Result_t",
                    "values": [
                        {
                            "name": "E_GET_REWARD_SUCCESS",
                            "id": 0
                        },
                        {
                            "name": "E_CODE_INVALID",
                            "id": 1
                        },
                        {
                            "name": "E_CODE_USED",
                            "id": 2
                        },
                        {
                            "name": "E_CODE_USED_SAME_TPYE",
                            "id": 3
                        },
                        {
                            "name": "E_CODE_EXPIRED",
                            "id": 4
                        },
                        {
                            "name": "E_CODE_INVALID_SERVER",
                            "id": 5
                        },
                        {
                            "name": "E_CDOE_INVALID_PLATFORM",
                            "id": 6
                        },
                        {
                            "name": "E_CODE_INVALID_TYPE",
                            "id": 7
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ITEM_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20100
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ITEM_INFO",
                    "name": "items",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_ITEM_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "uid",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qty",
                            "id": 3
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ITEM_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20101
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ITEM_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20102
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "qtys",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_USE_ITEM_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20103
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rwd",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_SELL_ITEM_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20104
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rwd",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ITEM_COMBINE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20105
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HERO_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20200
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_HERO_INFO",
                    "name": "heroes",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_SKILL_GROUP",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "skill_level",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "STRUCT_HERO_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "uid",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "id",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "adv",
                            "id": 4,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "lv",
                            "id": 5,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "star",
                            "id": 6,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "stones",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "exp",
                            "id": 8,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "STRUCT_SKILL_GROUP",
                            "name": "skill_groups",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "selected_skill_group",
                            "id": 10,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "protrait_id",
                            "id": 11,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_HERO_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20201
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HERO_UPGRADE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20202
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "upgrade_time",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "double_time",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_HERO_DECOMPOSE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20203
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HERO_REBORN_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20204
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HERO_COMBINE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20205
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HERO_ADVANCE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20206
                    }
                }
            ]
        },
        {
            "name": "SC_HERO_STAR_EMBED_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20207
                    }
                }
            ]
        },
        {
            "name": "SC_HERO_STAR_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20208
                    }
                }
            ]
        },
        {
            "name": "SC_HERO_SKILL_SELECT_GROUP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20209
                    }
                }
            ]
        },
        {
            "name": "SC_HERO_SKILL_UPGRADE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20210
                    }
                }
            ]
        },
        {
            "name": "SC_EQUIP_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20250
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_EQUIP_INFO",
                    "name": "equips",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_EQUIP_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "uid",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "upgrade",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "adv",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "main_prop_base",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "star",
                            "id": 7
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cost_gold",
                            "id": 8
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_EQUIP_INFO_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20251
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_EQUIP_STAR_UP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20255
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "succ",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "star",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "change_star",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_EQUIP_ADV_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20256
                    }
                }
            ]
        },
        {
            "name": "SC_EQUIP_DECOMPOSE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20257
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_EQUIP_REBORN_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20258
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_EQUIP_FORGE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20259
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "succ",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "equip_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_EQUIP_MOVE_STAR_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20260
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_star",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_EQUIP_UPGRADE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20261
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "crit_times",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "up_times",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_EQUIP_COMBINE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20262
                    }
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "equip_uid",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_EQUIP_ONEKEY_UPGRADE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20263
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "crit_times",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HALLOW_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20280
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_HALLOW_INFO",
                    "name": "hallows",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_EXP_HALLOW",
                    "name": "exp_hallows",
                    "id": 3
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_HALLOW_PROP",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "prop_type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "value",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_HALLOW_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "uid",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "hallow_id",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_HALLOW_PROP",
                            "name": "enchant_props",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_HALLOW_PROP",
                            "name": "replace_props",
                            "id": 7
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "lock_prop",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "up_lv",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "adv_lv",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "exp",
                            "id": 8
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "used_gold",
                            "id": 9
                        }
                    ]
                },
                {
                    "name": "STRUCT_EXP_HALLOW",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "hallow_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qty",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_HALLOW_INFO_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20281
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HALLOW_ADV_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20282
                    }
                }
            ]
        },
        {
            "name": "SC_HALLOW_ENCHANT_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20283
                    }
                }
            ]
        },
        {
            "name": "SC_HALLOW_ENCHANT_RESPONSE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20284
                    }
                }
            ]
        },
        {
            "name": "SC_HALLOW_REBORN_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20285
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HALLOW_DEC_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20286
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HALLOW_UPGRADE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20287
                    }
                }
            ]
        },
        {
            "name": "SC_HALLOW_TRANSFER_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20288
                    }
                }
            ]
        },
        {
            "name": "SC_HALLOW_COMBINE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20289
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_HALLOW_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20290
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_TALISMAN_UPGRADE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20300
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "succ",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_TALISMAN_ADV_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20301
                    }
                }
            ]
        },
        {
            "name": "SC_TALISMAN_STAR_UP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20303
                    }
                }
            ]
        },
        {
            "name": "SC_TALISMAN_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20304
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_TALISMAN_INFO",
                    "name": "talismans",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_TALISMAN_COAT_UP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20305
                    }
                }
            ]
        },
        {
            "name": "SC_TALISMAN_COAT_ONE_KEY_UP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20306
                    }
                }
            ]
        },
        {
            "name": "SC_TALISMAN_COAT_STAR_UP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20307
                    }
                }
            ]
        },
        {
            "name": "SC_BATTLE_SLOT_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20400
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_BATTLE_SLOT_INFO",
                    "name": "slots",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_BATTLE_YUANJUN_INFO",
                    "name": "yuanjuns",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "wing_id",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_BATTLE_FASHION_INFO",
                    "name": "fashions",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "title_id",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_display_fashion",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_display_wing",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_BATTLE_GEM",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "gem_id",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_BATTLE_SLOT_EQUIP_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "pos",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "equip_uid",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_BATTLE_GEM",
                            "name": "gems",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "STRUCT_BATTLE_SLOT_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "hero_uid",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_BATTLE_SLOT_EQUIP_INFO",
                            "name": "equips",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "hallow_uid",
                            "id": 5,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                },
                {
                    "name": "STRUCT_BATTLE_YUANJUN_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "hero_uid",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_BATTLE_FASHION_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "pos",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "fashion_id",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_STAGE_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20501
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_STAGE_INFO",
                    "name": "stage",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_STAGE_MAP_INFO",
                    "name": "stage_map",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_STAGE_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "stage_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "complete",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "highest_star",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "have_refill_times",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "STRUCT_STAGE_MAP_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "map_id",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "empty_chest",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_DAILY_STAGE_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20502
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_STAGE_INFO",
                    "name": "stage",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_STAGE_TYPE_INFO",
                    "name": "type_info",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_STAGE_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "stage_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "highest_star",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "STRUCT_STAGE_TYPE_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "stage_type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "complete_times",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_STAGE_GOLD_BEFORE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20600
                    }
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "gold",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_STAGE_VERIFY_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20601
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_win",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "star",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_STAGE_FAILE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20602
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "succ",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_STAGE_START_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20603
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_avaliable",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "token",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_INFO",
                    "name": "battle_info",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_STAGE_QUICK_COMPLETE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20604
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_STAGE_OPEN_CHEST_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20605
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_STAGE_REFILL_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20606
                    }
                }
            ]
        },
        {
            "name": "SC_DAILY_STAGE_VERIFY_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20607
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_win",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_DAILY_STAGE_IS_AVALIABLE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20608
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_avaliable",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_DAILY_STAGE_QUICK_COMPLETE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20609
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_BATTLE_MULTI_INIT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20650
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "team_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_INFO",
                    "name": "battle_info",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "battle_scene",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "SC_BATTLE_MULTI_UPDATE",
                    "name": "battle_updates",
                    "id": 5
                }
            ]
        },
        {
            "name": "SC_BATTLE_MULTI_SYNC_TIME_RES",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20651
                    }
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "serverTs",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "idx",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_BATTLE_MULTI_START",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20652
                    }
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "ts",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "battleTs",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_BATTLE_MULTI_AMEND_TIME",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20653
                    }
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "offset",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_BATTLE_MULTI_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20660
                    }
                },
                {
                    "rule": "required",
                    "type": "float",
                    "name": "ts",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "command",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "argsInt",
                    "id": 10
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "argsFloat",
                    "id": 11
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "argsString",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_BATTLE_PLAYER_INFO",
                    "name": "Player_Info",
                    "id": 13
                }
            ]
        },
        {
            "name": "SC_BATTLE_MULTI_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20661
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "win_side",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "star",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "argsInt",
                    "id": 10
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "argsFloat",
                    "id": 11
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "argsString",
                    "id": 12
                }
            ]
        },
        {
            "name": "SC_GEM_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20700
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_GEM_INFO",
                    "name": "gems",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_GEM_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "uid",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qty",
                            "id": 3
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_GEM_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20701
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_GEM_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20702
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "uids",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "qtys",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_GEM_COMBINE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20703
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_cri",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_GEM_UPGRADE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20704
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_cri",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_SELL_GEM_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20705
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rwd",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_OPERATION_DAILY_SIGN_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20800
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_OPERATION_DAILY_SIGN_TOTAL_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20801
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_OPERATION_DAILY_SIGN_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20802
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "signed_days",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "last_sign",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "diamond_times",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "empty_chest",
                    "id": 5
                }
            ]
        },
        {
            "name": "SC_OPERATION_DIANJIN_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20803
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_times",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "dianjin_times",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_OPERATION_DIANJIN_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20804
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "times",
                    "id": 3,
                    "options": {
                        "default": 1
                    }
                }
            ]
        },
        {
            "name": "SC_DAILY_INFO_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20805
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "stamina",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "energy",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_OPERATION_REFRESH_ALL_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20880
                    }
                }
            ]
        },
        {
            "name": "STRUCT_MAIL_INFO",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "type",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "recvId",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "sendId",
                    "id": 5,
                    "options": {
                        "default": 1
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "sendTime",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "sendName",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "strTitle",
                    "id": 8
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "strContent",
                    "id": 9
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 10
                }
            ]
        },
        {
            "name": "SC_MAIL_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20901
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_MAIL_INFO",
                    "name": "mails",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_MAIL_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20902
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int64",
                    "name": "mails_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_MAIL_GET_REWARD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20903
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_MAIL_REMOVE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 20904
                    }
                }
            ]
        },
        {
            "name": "SC_QUEST_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21000
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_QUEST_INFO",
                    "name": "quests",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "daily_quest_refresh_time",
                    "id": 3,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "daily_point",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "achievement_point",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_QUEST_CLASS_INFO",
                    "name": "quest_class_info",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "recent_achievements",
                    "id": 7
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_QUEST_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "config_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "quest_id",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "values",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "complete_time",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "is_got_reward",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "STRUCT_QUEST_CLASS_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "quest_type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "complete_quest",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "quest_max",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_QUEST_GET_REWARD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21001
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_NIUDAN_DRAW_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21100
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_NIUDAN_ADD_AND_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21101
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_NIUDAN_INFO",
                    "name": "niudans",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_NIUDAN_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "free_draw_times",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "next_avalible_time",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "next_special_qualtiy",
                            "id": 5,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "next_special_times",
                            "id": 6,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_SHOP_ADD_AND_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21200
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_SHOP_INFO",
                    "name": "shops",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_SHOP_POSITION_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "position",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "item_type",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "item_id",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "item_qty",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cost_id",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "cost_qty",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "remaining",
                            "id": 8,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "limit",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "ori_cost_id",
                            "id": 10,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "ori_cost_price",
                            "id": 11,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "buy_condition",
                            "id": 12,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "buy_cond_num",
                            "id": 13,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "info",
                            "id": 14,
                            "options": {
                                "default": ""
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_eff",
                            "id": 15,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                },
                {
                    "name": "STRUCT_SHOP_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "next_fresh_time",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_SHOP_POSITION_INFO",
                            "name": "posistions",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "reset_times",
                            "id": 4,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "off",
                            "id": 5,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "level",
                            "id": 6,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_SHOP_PLAYER_REFRESH_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21201
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "succ",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_SHOP_BUY_ITEM_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21202
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rewards",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_COMMON_SHOP_ADD_AND_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21203
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_fresh_time",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_COMMON_SHOP_ENTRY_INFO",
                    "name": "entry",
                    "id": 3
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_COMMON_SHOP_ENTRY_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "buy_times",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_COMMON_SHOP_BUY_ITEM_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21204
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rewards",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_VIP_SHOP_PAY_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21206
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_VIP_SHOP_IS_AVALIABLE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21207
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_avaliable",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_VIP_INFO_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21208
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_VIP_ITEM",
                    "name": "vip_items",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "bought_items_id",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "got_vip_gift_pack",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_VIP_ITEM",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "item_id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "expired_time",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "last_got_reward_time",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_VIP_GET_DAILY_CARD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21209
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_VIP_GIFT_GET_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21210
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "gift_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_VIP_SHOP_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21211
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_VIP_SHOP_ITEM",
                    "name": "items",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "version",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_VIP_SHOP_ITEM",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "name",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "type",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "price",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "image",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "order",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "normal_diamonds",
                            "id": 7
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "day_diamonds",
                            "id": 8
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "days",
                            "id": 9
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "first_diamonds",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "gift_diamonds",
                            "id": 11
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "vip_exp",
                            "id": 12
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_SHOP_REFRESH_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21212
                    }
                }
            ]
        },
        {
            "name": "STRUCT_TRAVEL_EVENT",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "event_id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "event_type",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_TRAVEL_ADD_AND_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21300
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_TRAVEL_INFO",
                    "name": "travels",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_MAP_INFO",
                    "name": "maps",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANDOM_BOSS",
                    "name": "boss_list",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_reset_time",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "current_boss_top",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "history_boss_top",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_STAR_COLLECTION",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_MAP_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "map_id",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "empty_chests",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_TRAVEL_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "stage_id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "current_boss_id",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "angry_point",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_STAR_COLLECTION",
                            "name": "collections",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "STRUCT_TRAVEL_EVENT",
                            "name": "event",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "collection",
                            "id": 7,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                },
                {
                    "name": "STRUCT_RANDOM_BOSS",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "boss_uid",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "boss_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "boss_level",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_TRAVEL_TRY_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21301
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_TRAVEL_EVENT",
                    "name": "event",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_TRAVEL_OPEN_CHEST_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21302
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_TRAVEL_EVENT_RESPONSE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21303
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_TRAVEL_CHALLENGE_BOSS_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21304
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_win",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_TRAVEL_RANDOM_BOSS_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21305
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_win",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_TRAVEL_RESET_RANDOM_BOSS_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21306
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_succ",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_TRAVEL_COLECTION_NOTIFY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21307
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_COLLECTION",
                    "name": "collections",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_COLLECTION",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_AUTO_TRAVEL_RECORD",
            "fields": [
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 1
                }
            ]
        },
        {
            "name": "SC_AUTO_TRAVEL_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21308
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_AUTO_TRAVEL",
                    "name": "auto_travel",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_AUTO_TRAVEL",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "auto_travel_area_id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "start_time",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "hours",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "next_send_award_time",
                            "id": 5
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_AUTO_TRAVEL_RECORD",
                            "name": "records",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "STRUCT_REWARD",
                            "name": "rewards",
                            "id": 7
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_AUTO_TRAVEL_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21309
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "auto_travel_area_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "next_send_award_time",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_AUTO_TRAVEL_RECORD",
                    "name": "records",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rewards",
                    "id": 5
                }
            ]
        },
        {
            "name": "SC_AUTO_TRAVEL_GET_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21310
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "auto_travel_area_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "STRUCT_PLAYER_SNAPSHOT",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "role_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 2,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "vip_lv",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "hero_id",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "combat_point",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "club_name",
                    "id": 7,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "club_id",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "color",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "server_id",
                    "id": 10,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "token",
                    "id": 11,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "STRUCT_PLAYER_DETAILS",
            "fields": [
                {
                    "rule": "required",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "player",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "SC_BATTLE_SLOT_ADD_UPDATE",
                    "name": "battle_slot",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "SC_HERO_INFO_ADD_UPDATE",
                    "name": "heros",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "SC_EQUIP_INFO_ADD_UPDATE",
                    "name": "equips",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "SC_HALLOW_INFO_ADD_UPDATE",
                    "name": "hallows",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_HERO_PROP",
                    "name": "hero_props",
                    "id": 8
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_HERO_PROP",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_PROP_VALUE",
                            "name": "propvalues",
                            "id": 2
                        }
                    ],
                    "messages": [
                        {
                            "name": "STRUCT_PROP_VALUE",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "prop_num",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "prop_value",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_RANK_PLAYER_SNAPSHOT",
            "fields": [
                {
                    "rule": "required",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "player",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_HERO_INFO",
                    "name": "heros",
                    "id": 5
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_HERO_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "hero_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "star_lv",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_RANK_CLUB_SNAP_SHOT",
            "fields": [
                {
                    "rule": "required",
                    "type": "STRUCT_CLUB_SNAP_SHOT",
                    "name": "club",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_LEVEL_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21400
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_PLAYER_SNAPSHOT",
                    "name": "players",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 101
                    }
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_STAGE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21401
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_PLAYER_SNAPSHOT",
                    "name": "players",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 201
                    }
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_ARENA_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21402
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_PLAYER_SNAPSHOT",
                    "name": "players",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 301
                    }
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_RANDOM_BOSS_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21403
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_PLAYER_SNAPSHOT",
                    "name": "players",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 202
                    }
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_ACHIEVEMENT_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21404
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_PLAYER_SNAPSHOT",
                    "name": "players",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 103
                    }
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_SHENMO_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21405
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_PLAYER_SNAPSHOT",
                    "name": "players",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 302
                    }
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_CLUB_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21406
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_CLUB_SNAP_SHOT",
                    "name": "clubs",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 401
                    }
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_CLUB_BY_COMBAT_POINT_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21407
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_CLUB_SNAP_SHOT",
                    "name": "clubs",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 402
                    }
                }
            ]
        },
        {
            "name": "SC_RANK_GET_TOP_COMBAT_POINT_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21408
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RANK_PLAYER_SNAPSHOT",
                    "name": "players",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank_id",
                    "id": 5,
                    "options": {
                        "default": 102
                    }
                }
            ]
        },
        {
            "name": "SC_GET_PLAYER_DETAIL_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21421
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_PLAYER_DETAILS",
                    "name": "player",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_GET_PLAYER_SNAPSHOT_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21422
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "snapshot",
                    "id": 2
                }
            ]
        },
        {
            "name": "STRUCT_BATTLE_RECORD",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "uid",
                    "id": 1
                }
            ]
        },
        {
            "name": "STRUCT_ARENA_PLAYER_SNAPSHOT",
            "fields": [
                {
                    "rule": "required",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "player",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "opp_combat_pt",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "win_times",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_ARENA_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21500
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "attack_times",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "chance_bought",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_chance_reset",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "top_rank",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "current_rank",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_chance_time",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ARENA_RECORD",
                    "name": "arena_records",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "win_times",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_first",
                    "id": 10,
                    "options": {
                        "default": false
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "read_record_ids",
                    "id": 11
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_ARENA_RECORD",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "uid",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "battle_id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "is_winner",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "is_attacker",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "pre_rank",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "new_rank",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "time",
                            "id": 7
                        },
                        {
                            "rule": "required",
                            "type": "STRUCT_ARENA_PLAYER_SNAPSHOT",
                            "name": "opponent",
                            "id": 8
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ARENA_ATTACK_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21501
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "result",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "arena_record_uid",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "pre_rank",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "cur_rank",
                    "id": 6
                }
            ]
        },
        {
            "name": "STRUCT_PLAYER_HERO_SNAPSHOT",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hero_id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "star_lv",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ARENA_LIST_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21502
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ARENA_LIST",
                    "name": "opponents",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_ARENA_LIST",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "STRUCT_ARENA_PLAYER_SNAPSHOT",
                            "name": "opponent",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "rank",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_PLAYER_HERO_SNAPSHOT",
                            "name": "heros",
                            "id": 3
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ARENA_RECHARGE_FIGHT_TIMES_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21503
                    }
                }
            ]
        },
        {
            "name": "SC_ARENA_CLEAR_CD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21504
                    }
                }
            ]
        },
        {
            "name": "SC_ARENA_READ_RECORD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21505
                    }
                }
            ]
        },
        {
            "name": "STRUCT_CHAT_MESSAGE",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "send_time",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "sender_type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "player",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "receiver_id",
                    "id": 10,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "receiver",
                    "id": 11
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "type",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "text",
                    "id": 4,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "voice_txt",
                    "id": 6,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "voice_byte",
                    "id": 7,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "voice_cnt",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "voice_freq",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "voice_token",
                    "id": 12,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "room_id",
                    "id": 13,
                    "options": {
                        "default": ""
                    }
                }
            ]
        },
        {
            "name": "STRUCT_CHAT_VOICE",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "voice_token",
                    "id": 1,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "voice_byte",
                    "id": 2,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "voice_cnt",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "voice_freq",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_CHAT_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21600
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "chat_chanel",
                    "id": 2,
                    "options": {
                        "default": 1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CHAT_MESSAGE",
                    "name": "messages",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CHAT_VOICE",
                    "name": "voices",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_CHAT_SEND_MESSAGE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21601
                    }
                }
            ]
        },
        {
            "name": "SC_CHAT_JOIN_CHANEL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21602
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "chat_chanel",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "chanel_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_CHAT_STATUS",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21603
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "status",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CHAT_LAST_READ_TIME",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21604
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CHATCHANEL_AND_TIME",
                    "name": "infos",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_CHATCHANEL_AND_TIME",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "chanel_type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "last_read_time",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "chanel_id",
                            "id": 3,
                            "options": {
                                "default": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_CHAT_GET_CHANEL_ID_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21605
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "chanel_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CHAT_LEAVE_CHANEL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21606
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "chat_chanel",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_SHENMO_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21700
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top_level",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "current_level",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "dead_times",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "next_refreshtime",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "buy_times",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "is_able_reset",
                    "id": 7
                }
            ]
        },
        {
            "name": "SC_SHENMO_QUICK_COMPLETE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21701
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_SHENMO_VIP_QUICK_COMPLETE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21702
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rewards",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_SHENMO_VERIFY_BATTLE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21703
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_win",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "star",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_SHENMO_IS_AVAILABLE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21704
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_available",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_WINGS_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21800
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_WINGS_INFO",
                    "name": "wings",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "zhufu_value",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "adv_lv",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_WINGS_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "star_lv",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_WING_ADV_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21801
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_WING_STAR_UP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21802
                    }
                }
            ]
        },
        {
            "name": "SC_WING_COMBINE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21803
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_FASHION_INFO_ADD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21810
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_FASHION_INFO",
                    "name": "fashions",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "zhufu_value",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "adv_lv",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_FASHION_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "fashion_id",
                            "id": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_FASHION_ADV_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21811
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_FASHION_COMBINE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21812
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CREATE_CLUB_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21900
                    }
                },
                {
                    "rule": "required",
                    "type": "ResultType",
                    "name": "res",
                    "id": 2
                }
            ],
            "enums": [
                {
                    "name": "ResultType",
                    "values": [
                        {
                            "name": "SUCCESS",
                            "id": 0
                        },
                        {
                            "name": "TOO_SHORT",
                            "id": 1
                        },
                        {
                            "name": "TOO_LONG",
                            "id": 2
                        },
                        {
                            "name": "DUPLICATE",
                            "id": 3
                        },
                        {
                            "name": "INVALID",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_MY_CLUB_DETAIL_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21901
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_update_all",
                    "id": 2,
                    "options": {
                        "default": false
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "club_name",
                    "id": 3,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "level",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_MEMBER",
                    "name": "members",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "notice",
                    "id": 6,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_TAN_HE",
                    "name": "tanhe",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "growth",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "min_lv",
                    "id": 10,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_verification",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "icon",
                    "id": 12,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "donate_progress",
                    "id": 13,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "club_gold",
                    "id": 14,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "top",
                    "id": 15,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "leader_name",
                    "id": 16,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "have_donate_number",
                    "id": 20,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "donate",
                    "id": 17,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "qualification",
                    "id": 18,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "title",
                    "id": 19,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_MEMBER",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "STRUCT_PLAYER_SNAPSHOT",
                            "name": "player",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "title",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "donate",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_give_stamina",
                            "id": 4,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_rec_stamina",
                            "id": 5,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "logut_time",
                            "id": 6,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "qualification",
                            "id": 7,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                },
                {
                    "name": "STRUCT_TAN_HE",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "start_time",
                            "id": 1,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "leader_id",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "support_id",
                            "id": 3
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_MY_CLUB_SELF_INFO_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21902
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "give_stamina",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rec_stamina",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "club_id",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_able_donate",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "leave_time",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "empty_donate_box",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CLUB_SKILL",
                    "name": "skills",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "complete_stage_time",
                    "id": 10,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CLUB_BOX",
                    "name": "donate_box",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "club_name",
                    "id": 12,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "donate_idx",
                    "id": 13,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_CLUB_SKILL",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "skill_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "skill_lv",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_CLUB_BOX",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "is_empty",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_MY_CLUB_MEMBER_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21903
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "members",
                    "id": 2
                }
            ]
        },
        {
            "name": "STRUCT_CLUB_SNAP_SHOT",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "club_id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "club_name",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "combatpoint",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "club_level",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "leader_name",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "icon",
                    "id": 6
                }
            ]
        },
        {
            "name": "STRUCT_CLUB_INFO",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "club_id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "club_name",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "rank",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "is_applied",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "notice",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "icon",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "max_member",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "current_member",
                    "id": 8
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "leader_name",
                    "id": 9
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "club_level",
                    "id": 10
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_need_verify",
                    "id": 11
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "min_lv",
                    "id": 12
                }
            ]
        },
        {
            "name": "SC_CLUB_SEARCH_BY_NAME_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21904
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CLUB_INFO",
                    "name": "clubs",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_OBSERVE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21905
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CLUB_INFO",
                    "name": "clubs",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_APPLY_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21906
                    }
                },
                {
                    "rule": "required",
                    "type": "ResultType",
                    "name": "result",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "club_id",
                    "id": 3
                }
            ],
            "enums": [
                {
                    "name": "ResultType",
                    "values": [
                        {
                            "name": "SUCCESS",
                            "id": 0
                        },
                        {
                            "name": "HAVE_APPLIED",
                            "id": 1
                        },
                        {
                            "name": "NOT_QUALIFIED",
                            "id": 2
                        },
                        {
                            "name": "HAVE_CLUB",
                            "id": 3
                        },
                        {
                            "name": "FULL",
                            "id": 4
                        },
                        {
                            "name": "NOT_FOUND",
                            "id": 5
                        },
                        {
                            "name": "LV_NOT_ENOUGH",
                            "id": 6
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_CLUB_APPLICATION_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21907
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_APPLICATION",
                    "name": "applications",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_APPLICATION",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "STRUCT_PLAYER_SNAPSHOT",
                            "name": "player",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "apply_time",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_CLUB_APPLICATION_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21908
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_APPLICATION_RESPONSE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21909
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 2,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "SC_CLUB_GIVE_STAMINA_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21910
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "result",
                    "id": 2,
                    "options": {
                        "default": 1
                    }
                }
            ]
        },
        {
            "name": "SC_CLUB_GET_STAMINA_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21911
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_SET_NOTICE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21912
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "notice",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_DONATE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21913
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_OPEN_DONATE_SCHEDULE_BOX",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21914
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_SETTING_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21915
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "icon",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "min_lv",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_verify",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_CLUB_LEAVE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21916
                    }
                }
            ]
        },
        {
            "name": "SC_CLUB_SET_TITLE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21917
                    }
                }
            ]
        },
        {
            "name": "SC_CLUB_BUILDING_LEVEL_UP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21918
                    }
                }
            ]
        },
        {
            "name": "SC_CLUB_KICK_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21919
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "suc",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_MY_CLUB_BUILDING_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21920
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CLUB_BUILDING",
                    "name": "buildings",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_CLUB_BUILDING",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "start_time",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "level",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_CLUB_OFFICE_MISSION_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21921
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_MISSION",
                    "name": "missions",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_BOX",
                    "name": "box",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "complete_mission_num",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_MISSION",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "mission_id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "compelte_num",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "star",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "STRUCT_BOX",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "is_empty",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_CLUB_OFFICE_OPEN_BOX_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21922
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_OFFICE_REFRESH_MISSION_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21923
                    }
                }
            ]
        },
        {
            "name": "SC_CLUB_OFFICE_ALL_FIVE_STAR_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21924
                    }
                }
            ]
        },
        {
            "name": "SC_CLUB_OFFICE_MISSION_GET_REWARD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21925
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_OFFICE_MISSION_DONATE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21926
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_SKILL_UP_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21930
                    }
                }
            ]
        },
        {
            "name": "SC_CLUB_LOG_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21931
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CLUB_LOG",
                    "name": "logs",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_CLUB_LOG",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "time",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "context",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_CLUB_REMOVE_PLAYER",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21932
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_CLUB_STAGE_AWARD_APPLICATION_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21940
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_APPLY_INFO",
                    "name": "apply_infos",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "my_apply_type",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "my_apply_id",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_got_award",
                    "id": 6
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_APPLY_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "award_type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "award_id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "inventory",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "apply_qty",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_CLUB_STAGE_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21941
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top_stage_id",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_STAGE",
                    "name": "stages",
                    "id": 3
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_STAGE",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "stage_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "stage_progress",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "last_refresh_time",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_CLUB_STAGE_AWARD_APPLICATION_LIST_DETAIL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 21942
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "award_type",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "award_id",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_PLAYER",
                    "name": "players",
                    "id": 5
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_PLAYER",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "STRUCT_PLAYER_SNAPSHOT",
                            "name": "player",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "damage",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_BATTLE_TEST_STAGE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 44444
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_TEAM_INFO",
                    "name": "battle_info",
                    "id": 2
                }
            ]
        },
        {
            "name": "STRUCT_BATTLE_INFO",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "ENUM_RoomType",
                    "name": "room_type",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_BATTLE_TEAM_INFO",
                    "name": "teams",
                    "id": 4
                }
            ]
        },
        {
            "name": "STRUCT_BATTLE_PLAYER_INFO",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "club_name",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_EQUIP_INFO",
                    "name": "equips",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_FASHION",
                    "name": "fasions",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "title",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "wing",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_BATTLE_PLAYER_INIT_INFO",
                    "name": "init_info",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "color",
                    "id": 8
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hero_id",
                    "id": 9
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "career_idx",
                    "id": 10
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "is_fashion_on",
                    "id": 11
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "club_id",
                    "id": 12
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "role_id",
                    "id": 13
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "token",
                    "id": 14
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_BATTLE_PLAYER_INIT_INFO",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "hp",
                            "id": 1,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "total_diamonds",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "total_gold",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_CHEST",
                            "name": "opened_chests",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_ITEM",
                            "name": "have_items",
                            "id": 5
                        }
                    ],
                    "messages": [
                        {
                            "name": "STRUCT_CHEST",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "chest_wave",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "chest_id",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "open_qty",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "STRUCT_ITEM",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "item_id",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "have_qty",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "STRUCT_EQUIP_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "equip_id",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_FASHION",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "pos",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_BATTLE_TEAM_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "AIResPath",
                    "id": 1,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "Side",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_SOLDIER_INFO",
                    "name": "Soldiers",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_BATTLE_WAVE_INFO",
                    "name": "Waves",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "TeamId",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_BATTLE_PLAYER_INFO",
                    "name": "Player_Info",
                    "id": 6
                }
            ]
        },
        {
            "name": "STRUCT_BATTLE_WAVE_INFO",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "STRUCT_SOLDIER_INFO",
                    "name": "Soldiers",
                    "id": 1
                }
            ]
        },
        {
            "name": "STRUCT_SOLDIER_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "AIResPath",
                    "id": 1,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "DataID",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ModelPath",
                    "id": 3,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Career",
                    "id": 4,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_PROPERTY_INFO",
                    "name": "Pro_D",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "STRUCT_PROPERTY_INFO",
                    "name": "Pro_P",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Level",
                    "id": 7,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SkillSPLv",
                    "id": 8,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SkillCD1Lv",
                    "id": 9,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SkillCD2Lv",
                    "id": 10,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SkillPassive",
                    "id": 11,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SlotIdx",
                    "id": 12,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "uid",
                    "id": 13,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "NormalAtkId",
                    "id": 17,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SkillSPId",
                    "id": 18,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SkillCD1Id",
                    "id": 19,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SkillCD2Id",
                    "id": 20,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SkillPassiveId",
                    "id": 21,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "StarLv",
                    "id": 22,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "portrait_id",
                    "id": 23,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_SOLDIER_INFO",
                    "name": "after_transform",
                    "id": 14
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_TALENT_BUFF",
                    "name": "talent_buffs",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_MATE_SKILL",
                    "name": "mate_skill",
                    "id": 16
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_TALENT_BUFF",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "buff_id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "level",
                            "id": 2,
                            "options": {
                                "default": 1
                            }
                        }
                    ]
                },
                {
                    "name": "STRUCT_MATE_SKILL",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "skill_id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "level",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "SlotIdx",
                            "id": 3
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_PROPERTY_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Hp",
                    "id": 1,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Sp",
                    "id": 2,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Atk",
                    "id": 3,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "MDef",
                    "id": 4,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "PDef",
                    "id": 5,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "MSpeed",
                    "id": 6,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "ASpeed",
                    "id": 7,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AtkInterval",
                    "id": 8,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "ViewDis",
                    "id": 9,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AntiPush",
                    "id": 10,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Hit",
                    "id": 11,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Miss",
                    "id": 12,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Cri",
                    "id": 13,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AntiCri",
                    "id": 14,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "BenchHp",
                    "id": 15,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "BenchSp",
                    "id": 16,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "CriDmg",
                    "id": 17,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Dmg",
                    "id": 18,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "PDmg",
                    "id": 19,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "MDmg",
                    "id": 20,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "NDmg",
                    "id": 21,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "SDmg",
                    "id": 22,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "EDmg",
                    "id": 23,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Guard",
                    "id": 24,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AntiDmg",
                    "id": 25,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AntiPDmg",
                    "id": 26,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AntiMDmg",
                    "id": 27,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AntiNDmg",
                    "id": 28,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "AntiSDmg",
                    "id": 29,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Heal",
                    "id": 30,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "BeHeal",
                    "id": 31,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "STRUCT_ROOM_OPTION",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "room_type",
                    "id": 1,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "room_id",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "scene_id",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max_players",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "min_players",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "battle_id",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "values",
                    "id": 7
                }
            ]
        },
        {
            "name": "STRUCT_PLAYER_STAGE_INFO",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "role_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_complete",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "start_time",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "token",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "health",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "damage",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_MISSION_INFO",
                    "name": "mission_info",
                    "id": 7
                }
            ]
        },
        {
            "name": "STRUCT_MISSION_INFO",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "value1",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "value2",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "number",
                    "id": 4
                }
            ]
        },
        {
            "name": "STRUCT_BATTLE_STAGE_INFO",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "STRUCT_PLAYER_STAGE_INFO",
                    "name": "role_infos",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_complete",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_win",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_MISSION_INFO",
                    "name": "mission_info",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "percent",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dead_hero",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "boss_hp",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "STRUCT_ROOM_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "room_id",
                    "id": 1,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "room_type",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "scene_id",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "label",
                    "id": 4,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max_num",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "current_num",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "leader",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "players",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "child_rooms",
                    "id": 9
                }
            ]
        },
        {
            "name": "SC_ROOM_UPDATE_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26000
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ROOM_INFO",
                    "name": "room_info",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ROOM_DETAILS_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26001
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "room_id",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_SLOT_INFO",
                    "name": "slots",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_ROOM_INFO",
                    "name": "room_info",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_SLOT_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "STRUCT_PLAYER_SNAPSHOT",
                            "name": "player",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "side",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "is_ready",
                            "id": 3,
                            "options": {
                                "default": true
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ROOM_REMOVE_ROLE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26002
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "room_id",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_ids",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_ROOM_JOIN_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26003
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "room_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "JoinRoomResult",
                    "name": "join_result",
                    "id": 3
                }
            ],
            "enums": [
                {
                    "name": "JoinRoomResult",
                    "values": [
                        {
                            "name": "SUCCESS",
                            "id": 0
                        },
                        {
                            "name": "FULL",
                            "id": 1
                        },
                        {
                            "name": "NOT_QUALIFIED",
                            "id": 2
                        },
                        {
                            "name": "SCERET_INCORRECT",
                            "id": 3
                        },
                        {
                            "name": "NOT_EXSIT",
                            "id": 4
                        },
                        {
                            "name": "ALREADY_JOIN",
                            "id": 5
                        },
                        {
                            "name": "UNABLE",
                            "id": 6
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ROOM_LEAVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26004
                    }
                },
                {
                    "rule": "required",
                    "type": "LeaveReason",
                    "name": "reason",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "room_id",
                    "id": 3
                }
            ],
            "enums": [
                {
                    "name": "LeaveReason",
                    "values": [
                        {
                            "name": "SELF",
                            "id": 0
                        },
                        {
                            "name": "DISMISS",
                            "id": 1
                        },
                        {
                            "name": "KICK",
                            "id": 2
                        },
                        {
                            "name": "TIMEOUT",
                            "id": 3
                        },
                        {
                            "name": "GAMESERVER",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ROOM_INVITATION",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26005
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_ROOM_INFO",
                    "name": "room",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "inviter_name",
                    "id": 3,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "args_int",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "args_string",
                    "id": 5
                }
            ]
        },
        {
            "name": "SC_ROOM_CREATE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26006
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "room_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ROOM_PRIVATE_INVITATION_REPONSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26007
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "room_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "role_info",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "response",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 5
                }
            ]
        },
        {
            "name": "SC_ROOM_CLOSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26020
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "room_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "CloseReason",
                    "name": "close_reason",
                    "id": 3,
                    "options": {
                        "default": "ERROR"
                    }
                }
            ],
            "enums": [
                {
                    "name": "CloseReason",
                    "values": [
                        {
                            "name": "LEADER_LEAVE",
                            "id": 0
                        },
                        {
                            "name": "ERROR",
                            "id": 1
                        },
                        {
                            "name": "EMPTY",
                            "id": 2
                        },
                        {
                            "name": "COMPLETE",
                            "id": 3
                        },
                        {
                            "name": "TIME_OUT",
                            "id": 4
                        },
                        {
                            "name": "SERVER",
                            "id": 5
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ROOM_RECOMMEND_LIST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26021
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_RECOMMEND_ROLE",
                    "name": "roles",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_RECOMMEND_ROLE",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "STRUCT_PLAYER_SNAPSHOT",
                            "name": "role_info",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "server_id",
                            "id": 2,
                            "options": {
                                "default": 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ROOM_INVITE_RESPONSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26022
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "invited",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ROOM_SEARCH_BY_PALYER_NAME_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26023
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "room_id",
                    "id": 3,
                    "options": {
                        "default": ""
                    }
                }
            ]
        },
        {
            "name": "SC_ROOM_QUICK_GAME_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26024
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "room_id",
                    "id": 3,
                    "options": {
                        "default": ""
                    }
                }
            ]
        },
        {
            "name": "SC_ROOM_GET_INFO_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26025
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_found",
                    "id": 2,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_ROOM_BATTLE_SERVER_FULL_NOTIFY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26026
                    }
                }
            ]
        },
        {
            "name": "SC_ONLINE_BATTLE_GET_AWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 26050
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "EAward_Source",
                    "name": "source_type",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "source_id",
                    "id": 4,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "source_location",
                    "id": 5,
                    "options": {
                        "default": ""
                    }
                }
            ],
            "enums": [
                {
                    "name": "EAward_Source",
                    "values": [
                        {
                            "name": "E_AWARD_SOURCE_CHEST",
                            "id": 1
                        },
                        {
                            "name": "E_AWARD_SOURCE_KILL_BOSS",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_AREA_ROLE_INFO_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27000
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_AREA_ROLE_INFO",
                    "name": "roles",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_EQUIP_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "equip_id",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_FASHION",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "pos",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "STRUCT_ROLE_HERO",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "hero_id",
                            "id": 1,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "career",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                },
                {
                    "name": "STRUCT_AREA_ROLE_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "role_id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 2,
                            "options": {
                                "default": ""
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_EQUIP_INFO",
                            "name": "equips",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "area",
                            "id": 4,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "location_x",
                            "id": 5,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "location_y",
                            "id": 6,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "title_id",
                            "id": 7,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "club_name",
                            "id": 8,
                            "options": {
                                "default": ""
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "wing",
                            "id": 9,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_FASHION",
                            "name": "fashions",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_display_wing",
                            "id": 11,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_display_fashion",
                            "id": 12,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "STRUCT_ROLE_HERO",
                            "name": "role_hero",
                            "id": 13
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "vip_lv",
                            "id": 14,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "target_npc",
                            "id": 15,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "color",
                            "id": 16,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_AREA_INIT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27001
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "area_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "location_x",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "location_y",
                    "id": 4
                }
            ]
        },
        {
            "name": "STRUCT_WILD_INFO",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "wild_id",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_WILD_QUEST",
                    "name": "quests",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "quest_total",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "close_time",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "icon",
                    "id": 5,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 6,
                    "options": {
                        "default": ""
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_WILD_QUEST",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "mission_id",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "mission_req_id",
                            "id": 3,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "complete_qty",
                            "id": 4,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "need_qty",
                            "id": 5,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_empty",
                            "id": 6,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_WILD_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27100
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_WILD_INFO",
                    "name": "wild_info",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_WILD_OPEN_BOX_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27101
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "wild_id",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "mission_idx",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "box_id",
                    "id": 6
                }
            ]
        },
        {
            "name": "SC_BATTLE_SERVER_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27102
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "server_ip",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "server_port",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "team_id",
                    "id": 5
                }
            ]
        },
        {
            "name": "SC_WILD_BOSS_INFO_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27103
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_BOSS_INFO",
                    "name": "boss_info",
                    "id": 3
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_BOSS_INFO",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "boss_obj_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "boss_group_id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "boss_lv",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "current_hp",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "total_hp",
                            "id": 5,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "refresh_type",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "next_respawn_time",
                            "id": 7,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "kill_obj_id",
                            "id": 8,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "kill_obj_need_qty",
                            "id": 9,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "kill_obj_current_qty",
                            "id": 10,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "boss_respawn_times",
                            "id": 11,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "total_respawn_times",
                            "id": 12,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_WILD_CURRENT_MISSION_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27104
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_WILD_INFO",
                    "name": "wild",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_WILD_JOIN_ROOM_ERROR",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27105
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "respawn_time",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_BROAD_CAST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27120
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "context",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "priority",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "is_self",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "times",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_immediate",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "limit",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "broad_num",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "var1",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_PHOTO_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27140
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_PHOTOS",
                    "name": "photos",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_PHOTOS",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "type",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "ids",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_TITLE_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27160
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_TITLE",
                    "name": "titles",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_TITLE",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "title_id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "expired_time",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_TITLE_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27161
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "title_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "STRUCT_MAY_SELECT_AWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "idx",
                    "id": 1,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "award_type",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "award_id",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "select_group",
                    "id": 5,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "STRUCT_ACTIVITY_BUY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "buy_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "type",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_MAY_SELECT_AWARD",
                    "name": "awards",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "buy_times",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit_times",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_NEED_ITEM",
                    "name": "need_items",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "description",
                    "id": 7,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "global_limit_times",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "global_buy_times",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "off",
                    "id": 10,
                    "options": {
                        "default": ""
                    }
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_NEED_ITEM",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "qty",
                            "id": 3
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_ACTIVITY_QUEST",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "quest_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "description",
                    "id": 2,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_MAY_SELECT_AWARD",
                    "name": "awards",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "target_qty",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "current_qty",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_get_reward",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_schedule",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "STRUCT_ACTIVITY_CLICK",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "click_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "description",
                    "id": 2,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_MAY_SELECT_AWARD",
                    "name": "awards",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "start_time",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "end_time",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "click_times",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit_times",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cooldown",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "last_click_time",
                    "id": 9,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "STRUCT_ACTIVITY_ROW",
            "fields": [
                {
                    "rule": "required",
                    "type": "EActivityRowType",
                    "name": "row_type",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "row_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_ACTIVITY_QUEST",
                    "name": "quest",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_ACTIVITY_BUY",
                    "name": "buy",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_ACTIVITY_CLICK",
                    "name": "click",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_LIMIT",
                    "name": "limits",
                    "id": 6
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_LIMIT",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "EActivityRowLimit",
                            "name": "type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "value",
                            "id": 2
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "EActivityRowType",
                    "values": [
                        {
                            "name": "ACTIVITY_ROW_QUEST",
                            "id": 1
                        },
                        {
                            "name": "ACTIVITY_ROW_BUY",
                            "id": 2
                        },
                        {
                            "name": "ACTIVITY_ROW_CLICK",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "EActivityRowLimit",
                    "values": [
                        {
                            "name": "ACTIVITY_ROW_LIMIT_LV",
                            "id": 1
                        },
                        {
                            "name": "ACTIVITY_ROW_LIMIT_VIP_LV",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_ACTIVITY_CATEGORY_PAGE",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "category_page_id",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ACTIVITY_ROW",
                    "name": "rows",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 3,
                    "options": {
                        "default": ""
                    }
                }
            ]
        },
        {
            "name": "STRUCT_ACTIVITY_DAY_PAGE",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "day_page_id",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ACTIVITY_CATEGORY_PAGE",
                    "name": "category_pages",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ACTIVITY_ROW",
                    "name": "rows",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "start_time",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "end_time",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 6,
                    "options": {
                        "default": ""
                    }
                }
            ]
        },
        {
            "name": "STRUCT_ACTIVITY_CHEST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "complete_quests",
                    "id": 1,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CHEST",
                    "name": "chests",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_AWARD",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "item_type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "item_id",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "item_qty",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "STRUCT_CHEST",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "idx",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "need_quests_qty",
                            "id": 2,
                            "options": {
                                "default": -1
                            }
                        },
                        {
                            "rule": "repeated",
                            "type": "STRUCT_AWARD",
                            "name": "awards",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "is_empty",
                            "id": 4,
                            "options": {
                                "default": -1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "STRUCT_NORAML_ACTIVITY",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "activity_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "EActivityType",
                    "name": "activity_type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "start_time",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "end_time",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "reward_end_time",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ACTIVITY_DAY_PAGE",
                    "name": "day_pages",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ACTIVITY_CATEGORY_PAGE",
                    "name": "category_pages",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_ACTIVITY_ROW",
                    "name": "rows",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_ACTIVITY_CHEST",
                    "name": "chest",
                    "id": 9
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "args_int",
                    "id": 10
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "args_string",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 12,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "icon",
                    "id": 13,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "banner_title",
                    "id": 14,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "banner_icon",
                    "id": 15,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 17,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "template_id",
                    "id": 16,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "template_args_int",
                    "id": 18
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "template_args_str",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "entry_icon",
                    "id": 20,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "entry_name",
                    "id": 21,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "rank",
                    "id": 22,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "activity_sign",
                    "id": 23,
                    "options": {
                        "default": -1
                    }
                }
            ],
            "enums": [
                {
                    "name": "EActivityType",
                    "values": [
                        {
                            "name": "Normal_Activity",
                            "id": 1
                        },
                        {
                            "name": "Seven_Day_Activity",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_ACTIVITY_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27200
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_NORAML_ACTIVITY",
                    "name": "normal_activity",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "open_day",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_ACTIVITY_GET_QUEST_AWARD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27201
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ACTIVITY_CLICK_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27202
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ACTIVITY_BUY_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27203
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ACTIVITY_OPEN_CHEST_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27204
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ACTIVITY_NOTIFY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27205
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "dirty_activity",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_immediately",
                    "id": 3,
                    "options": {
                        "default": 1
                    }
                }
            ]
        },
        {
            "name": "SC_ACTIVITY_DELETE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27206
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "activity_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_MAIN_MISSION_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27220
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "mission_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "progress",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "complete_time",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_got_reward",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "SC_MAIN_MISSION_GET_REWARD_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27221
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rewards",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_DEPTH_BOSS_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27240
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "complete_times",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "next_refresh_time",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "passed_boss_id",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_DEPTH_BOSS_VERIFY_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27241
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "boss_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "is_win",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_FLOP_CARDS_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27260
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "card_num",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "cost_diamonds",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_REWARD",
                    "name": "rewards",
                    "id": 5
                }
            ]
        },
        {
            "name": "SC_FLOP_CARDS_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27261
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "idx",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "reward",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_FRIEND_INVITE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27262
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "requester_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "requester_name",
                    "id": 3
                }
            ]
        },
        {
            "name": "SC_REFRESH_FRIEND_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27263
                    }
                }
            ]
        },
        {
            "name": "SC_GET_FRIEND_INFO_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27264
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "friends",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "friends_req",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "friends_be_req",
                    "id": 4
                }
            ]
        },
        {
            "name": "SC_ACTIVITY_FLIP_CARD_UPDATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27265
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "pool_items_id",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_CARD",
                    "name": "cards",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "daily_free_times",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "next_reset_time",
                    "id": 5
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_CARD",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "pos",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "item_id",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_GROW_AIM_UPDATE_AND_ADD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27290
                    }
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_GROW_AIM",
                    "name": "grow_aims",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_GROW_AIM",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "is_active",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "int32",
                            "name": "bought_item_idx",
                            "id": 3
                        }
                    ]
                }
            ]
        },
        {
            "name": "SC_GROW_AIM_ACTIVE_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27291
                    }
                }
            ]
        },
        {
            "name": "SC_GROW_AIM_BUY_ITEM_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 27292
                    }
                },
                {
                    "rule": "required",
                    "type": "STRUCT_REWARD",
                    "name": "rewards",
                    "id": 2
                }
            ]
        },
        {
            "name": "SC_ECHO_REPLY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 201
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "msg",
                    "id": 2
                }
            ]
        }
    ],
    "enums": [
        {
            "name": "ENUM_RoomType",
            "values": [
                {
                    "name": "NORMAL_STAGE_ROOM",
                    "id": 1
                },
                {
                    "name": "DAILY_STAGE_ROOM",
                    "id": 2
                },
                {
                    "name": "UNION_STAGE_ROOM",
                    "id": 3
                },
                {
                    "name": "WILD_ROOM",
                    "id": 4
                },
                {
                    "name": "ARENA_ROOM",
                    "id": 5
                },
                {
                    "name": "SHENMO_ROOM",
                    "id": 6
                },
                {
                    "name": "TRAVEL_BOSS_ROOM",
                    "id": 7
                },
                {
                    "name": "TRAVEL_RANDOM_BOSS_ROOM",
                    "id": 8
                },
                {
                    "name": "DEPTH_BOSS_ROOM",
                    "id": 9
                },
                {
                    "name": "NORMAL_STAGE_CHANNEL",
                    "id": 1001
                },
                {
                    "name": "DAILY_STAGE_CHANNEL",
                    "id": 1002
                },
                {
                    "name": "UNION_STAGE_CHANNEL",
                    "id": 1003
                },
                {
                    "name": "WILD_CHANEL",
                    "id": 1004
                },
                {
                    "name": "DEPTH_BOSS_CHANNEL",
                    "id": 1005
                }
            ]
        }
    ]
}).build();
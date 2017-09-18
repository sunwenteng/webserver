module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "Protocol.C2S",
    "messages": [
        {
            "name": "LOGIN_CS_ACCOUNT_LOGIN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10000
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "account",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "pwd_md5",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "platform_id",
                    "id": 4
                }
            ]
        },
        {
            "name": "LOGIN_CS_PLATFORM_LOGIN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10001
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "token",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device_token",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device_type",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "open_uid",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "apple_uid",
                    "id": 8
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "platform",
                    "id": 9
                }
            ]
        },
        {
            "name": "LOGIN_CS_FAST_LOGIN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10002
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device_type",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "open_uid",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "apple_uid",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "platform",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "ios_version",
                    "id": 8
                }
            ]
        },
        {
            "name": "LOGIN_CS_GET_SERVER",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10003
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "version",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "res_version",
                    "id": 3
                }
            ]
        },
        {
            "name": "LOGIN_CS_CHOOSE_SERVER",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10004
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "server_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "LOGIN_CS_REGISTER",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10005
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "account",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "pwd_md5",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "platform_id",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device_type",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "open_udid",
                    "id": 8
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "apple_udid",
                    "id": 9
                }
            ]
        },
        {
            "name": "LOGIN_CS_MODIFY_PASSWD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10006
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "new_passwd",
                    "id": 3
                }
            ]
        },
        {
            "name": "LOGIN_CS_PTR_GET_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10007
                    }
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "gm_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "account_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "LOGIN_CS_PTR_REGISTER",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10008
                    }
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "gm_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "account_id",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "server_ip_ori",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "server_id",
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
                    "name": "pwdMd5",
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
                    "name": "open_udid",
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
            "name": "LOGIN_CS_CDK",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 10009
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "cdk",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_GAME_AUTH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11000
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
                    "type": "string",
                    "name": "device",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device_type",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "device_uid",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "reconnect",
                    "id": 6
                }
            ]
        },
        {
            "name": "CS_GM_COMMAND",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11010
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "content",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TIME_REQUEST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11020
                    }
                }
            ]
        },
        {
            "name": "CS_CREATE_NAME",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11200
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
            "name": "CS_CREATE_ACCOUNT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11201
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "Sexual",
                    "name": "sexual",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "fashion_id",
                    "id": 4,
                    "options": {
                        "default": 0
                    }
                }
            ],
            "enums": [
                {
                    "name": "Sexual",
                    "values": [
                        {
                            "name": "MAN",
                            "id": 0
                        },
                        {
                            "name": "WOMAN",
                            "id": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "CS_GET_RANDOM_NAME",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11202
                    }
                },
                {
                    "rule": "required",
                    "type": "Sex",
                    "name": "sex",
                    "id": 2
                }
            ],
            "enums": [
                {
                    "name": "Sex",
                    "values": [
                        {
                            "name": "MAN",
                            "id": 0
                        },
                        {
                            "name": "WOMAN",
                            "id": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "CS_SYSTEM_OPTION_SET",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11203
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
            "name": "CS_CHANGE_NAME",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11204
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
            "name": "CS_GUIDE_SET_STEP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11205
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "guide_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "step",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_GUIDE_SET_SPECIAL_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11206
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "number",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_GIFT_CODE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11207
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "code",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_GUIDE_COMPLETE_FIRST_FIGHT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11208
                    }
                }
            ]
        },
        {
            "name": "CS_TALK_TO_NPC",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11210
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "npc_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_HERO_ADVANCE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11220
                    }
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
            "name": "CS_HERO_DECOMPOSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11221
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "heros_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_HERO_REBORN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11222
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "heros_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_HERO_COMBINE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11223
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hero_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_HERO_UPGRADE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11224
                    }
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
                    "name": "qty",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "item_id",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_HERO_STAR_EMBED",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11225
                    }
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
                    "name": "stone_index",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_HERO_STAR",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11226
                    }
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
            "name": "CS_HERO_SKILL_SELECT_GROUP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11227
                    }
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
                    "name": "group_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_HERO_SKILL_UPGRADE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11228
                    }
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
                    "name": "group_id",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "skill_index",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_HERO_CHANGE_PROTRAIT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11229
                    }
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
                    "name": "protrait_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_ITEM_USE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11300
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "item_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_ITEM_SELL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11301
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "item_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_ITEM_COMBINE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11302
                    }
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
                    "name": "qty",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_ITEM_OPEN_SELECT_BOX",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11303
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "item_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "select_type",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "select_id",
                    "id": 5
                }
            ]
        },
        {
            "name": "CS_BATTLE_SLOT_SET_HERO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11330
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hero_uid",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_BATTLE_SLOT_SET_EQUIP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11331
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "pos",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "equip_uid",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_BATTLE_SLOT_SET_TALISMAN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11332
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "pos",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "Talisman_id",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_BATTLE_SLOT_SET_HALLOW",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11333
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hallow_uid",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_BATTLE_SLOT_SET_GEM_UP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11334
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "pos",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "gem_id",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_BATTLE_SLOT_SET_GEM_OFF",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11335
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "pos",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "gem_idx",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_BATTLE_SLOT_SWAP_HERO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11336
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx1",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx2",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_BATTLE_SET_YUANJUN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11337
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "yuanjun_idx",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hero_uid",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_BATTLE_SET_WING",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11338
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "wing_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_BATTLE_SET_FASHION",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11339
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "pos",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_BATTLE_SET_TITLE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11340
                    }
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
            "name": "STRUCT_COST_ITEM",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "item_uid",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "number",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TALISMAN_UPGRADE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11400
                    }
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
            "name": "CS_TALISMAN_ADV",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11401
                    }
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
            "name": "CS_TALISMAN_STAR_UP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11402
                    }
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
            "name": "CS_TALISMAN_COAT_UP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11404
                    }
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
                    "name": "coat_id",
                    "id": 3
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
                }
            ]
        },
        {
            "name": "CS_TALISMAN_COAT_ONE_KEY_UP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11405
                    }
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
                    "name": "coat_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_TALISMAN_COAT_STAR_UP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11406
                    }
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
                    "name": "coat_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_STAGE_VERIFY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11500
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "token",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_STAGE_INFO",
                    "name": "info",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_STAGE_GOLD_BEFORE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11501
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_STAGE_FAIL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11502
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_STAGE_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11503
                    }
                }
            ]
        },
        {
            "name": "CS_STAGE_START",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11504
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_STAGE_QUICK_COMPLETE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11505
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_STAGE_OPEN_CHEST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11506
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "map_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "index",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_STAGE_REFILL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11507
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_DAILY_STAGE_VERIFY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11508
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
                    "name": "token",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_STAGE_INFO",
                    "name": "info",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_DAILY_STAGE_IS_AVALIABLE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11509
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_DAILY_STAGE_QUICK_COMPLETE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11510
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_DAILY_STAGE_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11511
                    }
                }
            ]
        },
        {
            "name": "CS_DAILY_STAGE_START",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11512
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_GEM_SELL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11601
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "gem_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_GEM_COMBINE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11602
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "gem_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_GEM_UPGRADE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11603
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "pos",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "gem_idx",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_EQUIP_FORGE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11700
                    }
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
            "name": "CS_EQUIP_MOVE_STR",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11701
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "source_equip_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_equip_uid",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_perfect",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_EQUIP_UPGRADE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11702
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "equip_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "time",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_EQUIP_ADV",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11703
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "equip_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_EQUIP_DECOMPOSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11704
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "equips_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_EQUIP_REBORN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11705
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "equips_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_EQUIP_STAR_UP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11706
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "equip_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "bIsProtect",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_EQUIP_COMBINE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11707
                    }
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
            "name": "CS_EQUIP_ONEKEY_UPGRADE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11708
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_HALLOW_UPGRADE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11720
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hallow_target_uid",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "hallow_exp_uids",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "STRUCT_EXP_HALLOW",
                    "name": "exp_hallows",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "STRUCT_EXP_HALLOW",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "exp_hallow_id",
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
            "name": "CS_HALLOW_ADV",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11721
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hallow_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_HALLOW_ENCHANT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11722
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hallow_uid",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "lock_props",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_HALLOW_ENCHANT_RESPONSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11723
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hallow_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_accept",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_HALLOW_REBORN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11724
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hallow_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_HALLOW_DEC",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11725
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hallow_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_HALLOW_TRANSFER_ENCHANT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11726
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "from_uid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_uid",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_HALLOW_COMBINE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11727
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "hallow_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_OPERATION_DAILY_SIGN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11800
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_use_diamond",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_OPERATION_DAILY_SIGN_TOTAL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11801
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "index",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_OPERATION_REFRESH_ALL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11802
                    }
                }
            ]
        },
        {
            "name": "CS_OPERATION_DIANJIN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11803
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_batch",
                    "id": 2,
                    "options": {
                        "default": false
                    }
                }
            ]
        },
        {
            "name": "CS_OPERATION_REFRESH_SIGN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11830
                    }
                }
            ]
        },
        {
            "name": "CS_OPERATION_REFRESH_DIANJIN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11831
                    }
                }
            ]
        },
        {
            "name": "CS_MAIL_GET_REWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11900
                    }
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "mail_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_MAIL_REMOVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 11901
                    }
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "mail_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_QUEST_GET_REWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12000
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "config_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "quest_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_QUEST_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12001
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "config_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "quest_type",
                    "id": 3,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "CS_NIUDAN_DRAW",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12100
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "toy_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "times",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_NIUDAN_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12101
                    }
                }
            ]
        },
        {
            "name": "CS_SHOP_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12200
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "shop_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_SHOP_PLAYER_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12201
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "shop_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_SHOP_BUY_ITEM",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12202
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "shop_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "position",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_COMMON_SHOP_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12203
                    }
                }
            ]
        },
        {
            "name": "CS_COMMON_SHOP_BUY_ITEM",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12204
                    }
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
        },
        {
            "name": "CS_VIP_SHOP_GM_PAY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12205
                    }
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
                    "name": "version",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_VIP_SHOP_IS_AVALIABLE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12206
                    }
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
                    "name": "version",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_VIP_SHOP_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12207
                    }
                }
            ]
        },
        {
            "name": "CS_VIP_GET_DAILY_CARD_AWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12208
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "card_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_VIP_GET_GIFT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12209
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "vip_lv",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TRAVEL_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12300
                    }
                }
            ]
        },
        {
            "name": "CS_TRAVEL_TRY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12301
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TRAVEL_OPEN_CHEST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 12302
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "map_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "chest_index",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_TRAVEL_EVENT_RESPONSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13303
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
                    "type": "int32",
                    "name": "choice",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_TRAVEL_CHALLENGE_BOSS",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13304
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TRAVEL_RANDOM_BOSS",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13305
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "boss_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TRAVEL_RESET_RANDOM_BOSS",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13306
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_diamond",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TRAVEL_CHALLENGE_BOSS_START",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13307
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TRAVEL_CHALLENGE_BOSS_VERIFY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13308
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "token",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_STAGE_INFO",
                    "name": "info",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_TRAVEL_RANDOM_BOSS_START",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13309
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "boss_uid",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_TRAVEL_RANDOM_BOSS_VERIFY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13310
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "token",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_STAGE_INFO",
                    "name": "info",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_AUTO_TRAVEL_AREA_START",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13311
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
                    "name": "hours",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_AUTO_TRAVEL_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13312
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "auto_travel_area_ids",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_AUTO_TRAVEL_GET_REWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13313
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "auto_travel_area_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_LEVEL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13400
                    }
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_STAGE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13401
                    }
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_ARENA",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13402
                    }
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_RANDOM_BOSS",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13403
                    }
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_ACHIEVEMENT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13404
                    }
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_SHENMO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13405
                    }
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_CLUB",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13406
                    }
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_CLUB_BY_COMBAT_POINT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13407
                    }
                }
            ]
        },
        {
            "name": "CS_RANK_GET_TOP_COMBAT_POINT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13408
                    }
                }
            ]
        },
        {
            "name": "CS_GET_PLAYER_DETAIL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13420
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
            "name": "CS_GET_PLAYER_SNAPSHOT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13421
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
            "name": "CS_ARENA_ATTACK",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13500
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_rank",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_ARENA_GET_TARGET_LIST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13501
                    }
                }
            ]
        },
        {
            "name": "CS_ARENA_RECHARGE_FIGHT_TIMES",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13502
                    }
                }
            ]
        },
        {
            "name": "CS_ARENA_CLEAR_CD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13503
                    }
                }
            ]
        },
        {
            "name": "CS_ARENA_VERIFY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13504
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "token",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_STAGE_INFO",
                    "name": "info",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_ARENA_READ_RECORD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13505
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "ids",
                    "id": 2
                }
            ]
        },
        {
            "name": "STRUCT_CHAT_MESSAGE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "receiver_id",
                    "id": 1,
                    "options": {
                        "default": 0
                    }
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
                }
            ]
        },
        {
            "name": "CS_CHAT_SEND_MESSAGE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13600
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
                    "rule": "required",
                    "type": "STRUCT_CHAT_MESSAGE",
                    "name": "message",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_CHAT_JOIN_CHANEL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13601
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
            "name": "CS_CHAT_REQUEST_VOICE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13602
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "chanel_type",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "token",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_CHAT_READ_CHANEL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13603
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "chanel_type",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CHAT_GET_CHANEL_ID",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13604
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
            "name": "CS_CHAT_LEAVE_CHANEL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13605
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "chanel_type",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_SHENMO_PLAYER_RESET",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13701
                    }
                }
            ]
        },
        {
            "name": "CS_SHENMO_VERIFY_BATTLE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13702
                    }
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
                    "name": "token",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "STRUCT_BATTLE_STAGE_INFO",
                    "name": "info",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_SHENMO_IS_AVAILABLE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13703
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "level",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_SHENMO_QUICK_COMPLETE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13704
                    }
                }
            ]
        },
        {
            "name": "CS_SHENMO_VIP_QUICK_COMPLETE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13705
                    }
                }
            ]
        },
        {
            "name": "CS_SHENMO_START",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13706
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "level",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_SHENMO_BUY_VIP_RESET",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13707
                    }
                }
            ]
        },
        {
            "name": "CS_SHENMO_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13708
                    }
                }
            ]
        },
        {
            "name": "CS_WING_ADV",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13800
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_diamond",
                    "id": 2,
                    "options": {
                        "default": false
                    }
                }
            ]
        },
        {
            "name": "CS_WING_STAR_UP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13801
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "wing_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_WING_COMBINE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13802
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "wing_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_WING_SET_DISPLAY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13803
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "display",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_WING_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13804
                    }
                }
            ]
        },
        {
            "name": "CS_FASHION_ADV",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13820
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_diamond",
                    "id": 2,
                    "options": {
                        "default": false
                    }
                }
            ]
        },
        {
            "name": "CS_FASHION_COMBINE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13821
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "fashion",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_FASHION_SET_DISPLAY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13822
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "display",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_FASHION_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13823
                    }
                }
            ]
        },
        {
            "name": "CS_GET_MY_CLUB_DETAIL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13900
                    }
                }
            ]
        },
        {
            "name": "CS_CLUB_SEARCH_BY_NAME",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13901
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
            "name": "CS_CLUB_OBSERVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13902
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "top",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_APPLY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13903
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "club_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_APPLICATION_RESPONSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13904
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_accept",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_CLUB_SET_TITLE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13905
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "title",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_CLUB_LEAVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13906
                    }
                }
            ]
        },
        {
            "name": "CS_CLUB_KICK",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13907
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_TANHE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13908
                    }
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_leader",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_GIVE_STAMINA",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13909
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_GET_STAMINA",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13910
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_CREATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13911
                    }
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
                    "name": "icon",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_CLUB_CHANGE_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13912
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "icon",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_CLUB_SET_NOTICE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13913
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
            "name": "CS_CLUB_DONATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13914
                    }
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
            "name": "CS_CLUB_OPEN_DONATE_SCHEDULE_BOX",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13915
                    }
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
            "name": "CS_CLUB_SETTING",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13916
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
            "name": "CS_CLUB_BUILDING_REQUEST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13917
                    }
                }
            ]
        },
        {
            "name": "CS_CLUB_BUILDING_LV_UP",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13918
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "building_idx",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_OFFICE_MISSION_OPEN_BOX",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13920
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "idx",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_OFFICE_MISSION_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13921
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "idx",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_OFFICE_MISSION_ALL_FIVE_STAR",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13922
                    }
                }
            ]
        },
        {
            "name": "CS_CLUB_OFFICE_MISSION_DONATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13923
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "idx",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_OFFICE_MISSION_GET_REWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13924
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "idx",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_SKILL_UPGRADE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13930
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "skill_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_LOG_REQUEST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13931
                    }
                }
            ]
        },
        {
            "name": "CS_CLUB_REFRESH_APPLICATION",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13932
                    }
                }
            ]
        },
        {
            "name": "CS_CLUB_STAGE_GET_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13940
                    }
                }
            ]
        },
        {
            "name": "CS_CLUB_STAGE_AWARD_APPLY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13941
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
                }
            ]
        },
        {
            "name": "CS_CLUB_STAGE_GET_APPLY_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13942
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_CLUB_STAGE_GET_APPLY_LIST_DETAIL",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13943
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
                }
            ]
        },
        {
            "name": "CS_CLUB_STAGE_RESET",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 13944
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_ROOM_GET_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16000
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "root_room",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "depth",
                    "id": 3,
                    "options": {
                        "default": 1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_simple",
                    "id": 4,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "CS_ROOM_JOIN",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16001
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
                    "type": "string",
                    "name": "sceret",
                    "id": 3,
                    "options": {
                        "default": ""
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "leader_id",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "CS_ROOM_START",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16002
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
            "name": "CS_ROOM_PREPARE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16003
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
            "name": "CS_ROOM_CHANGE_SLOT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16004
                    }
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "room_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "slot_idx",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_ROOM_GET_RECOMMEND_PLAYER",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16005
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "root_room",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max_local_server",
                    "id": 3,
                    "options": {
                        "default": 10
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max_from_other_server",
                    "id": 4,
                    "options": {
                        "default": 5
                    }
                }
            ]
        },
        {
            "name": "STRUCT_ROOM_OPTION",
            "fields": []
        },
        {
            "name": "CS_ROOM_CREATE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16006
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "root_room",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_ROOM_OPTION",
                    "name": "option",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_ROOM_INVITE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16007
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "server_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "role_id",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "room_id",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_ROOM_LEAVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16008
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
            "name": "CS_ROOM_UNPERARE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16009
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
            "name": "CS_ROOM_GET_RECOMMEND_CLUB_PLAYER",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16010
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "root_room",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_ROOM_PRIVATE_INVITATION_RESPONSE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16011
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
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "role_info",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "response",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_ROOM_HERAT_BEAT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16020
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
            "name": "CS_ROOM_SEARCH_BY_PLAYER_FULL_NAME",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16021
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "server_type",
                    "id": 3,
                    "options": {
                        "default": 4
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "root_room",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "target_full_name",
                    "id": 5,
                    "options": {
                        "default": ""
                    }
                }
            ]
        },
        {
            "name": "CS_ROOM_QUICK_GAME",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16022
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "root_room",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_ROOM_KICK",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16023
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
                    "type": "int32",
                    "name": "target_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_ROOM_INVITE_LINK",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 16024
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
            "name": "CS_AREA_UPDATE_LOCATION",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17000
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "area",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "location_x",
                    "id": 3,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "location_y",
                    "id": 4,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "target_id",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "CS_AREA_HEART_BEAT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17001
                    }
                }
            ]
        },
        {
            "name": "CS_AREA_CHANGE_ROLE_STATUS",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17002
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "is_able_to_be_invited",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
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
                }
            ]
        },
        {
            "name": "CS_WILD_GET_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17100
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "server_type",
                    "id": 3,
                    "options": {
                        "default": 3
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "wild_id",
                    "id": 4,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "CS_WILD_OPEN_BOX",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17101
                    }
                },
                {
                    "rule": "optional",
                    "type": "STRUCT_PLAYER_SNAPSHOT",
                    "name": "role",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "server_type",
                    "id": 3,
                    "options": {
                        "default": 3
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "wild_id",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "mission_idx",
                    "id": 5
                }
            ]
        },
        {
            "name": "CS_WILD_GET_BOSS_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17102
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "role_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "server_type",
                    "id": 3,
                    "options": {
                        "default": 3
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "wild_id",
                    "id": 4
                }
            ]
        },
        {
            "name": "CS_ACTIVITY_GET_QUEST_REWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17120
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "quest_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "award_idx",
                    "id": 3,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "CS_ACTIVITY_BUY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17121
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "buy_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "qty",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "award_idx",
                    "id": 4,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "CS_ACTIVITY_CLICK",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17122
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "click_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "parm",
                    "id": 3,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "CS_ACTIVITY_OPEN_CHEST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17123
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "activity_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "idx",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_ACTIVITY_REFRESH",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17124
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
            "name": "CS_MAIN_MISSION_GET_REWARD",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17140
                    }
                }
            ]
        },
        {
            "name": "CS_FLOP_CARDS",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17160
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "idx",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_NEWDAY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17200
                    }
                }
            ]
        },
        {
            "name": "CS_GROW_AIM_ACTIVE",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17210
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "grow_aim_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_GROW_AIM_BUY_ITEM",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17211
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "grow_aim_id",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "buy_item_idx",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_FRIEND_REQ",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17230
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_FRIEND_REQ_RESULT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17231
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
                    "name": "requestid",
                    "id": 3
                }
            ],
            "enums": [
                {
                    "name": "ResultType",
                    "values": [
                        {
                            "name": "Agreed",
                            "id": 1
                        },
                        {
                            "name": "Refused",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "CS_DEL_FRIEND",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17232
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "target_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_GET_FRIEND_INFO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 17234
                    }
                }
            ]
        },
        {
            "name": "CS_STAGE_TEST",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 33333
                    }
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "stage_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "CS_BATTLE_MULTI_CONNECT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 30001
                    }
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
            "name": "CS_BATTLE_MULTI_SYNC_TIME_REQ",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 30002
                    }
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "clientTs",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "idx",
                    "id": 3
                }
            ]
        },
        {
            "name": "CS_BATTLE_MULTI_READY",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 30003
                    }
                }
            ]
        },
        {
            "name": "CS_BATTLE_MULTI_HEARTBEAT",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 30004
                    }
                }
            ]
        },
        {
            "name": "CS_BATTLE_MULTI_OPR",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 30010
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
                    "rule": "required",
                    "type": "int32",
                    "name": "uid",
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
                    "type": "int32",
                    "name": "is_complete",
                    "id": 2,
                    "options": {
                        "default": -1
                    }
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
                    "id": 2,
                    "options": {
                        "default": -1
                    }
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
                    "name": "percent",
                    "id": 5,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "dead_hero",
                    "id": 6,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "boss_hp",
                    "id": 7,
                    "options": {
                        "default": -1
                    }
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "star",
                    "id": 8,
                    "options": {
                        "default": -1
                    }
                }
            ]
        },
        {
            "name": "CS_ECHO",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "cmd_id",
                    "id": 1,
                    "options": {
                        "default": 101
                    }
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "msg",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "int32",
                    "name": "data",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "Color",
                    "name": "color",
                    "id": 4
                }
            ],
            "enums": [
                {
                    "name": "Color",
                    "values": [
                        {
                            "name": "RED",
                            "id": 0
                        },
                        {
                            "name": "BLUE",
                            "id": 1
                        },
                        {
                            "name": "YELLOW",
                            "id": 1
                        }
                    ],
                    "options": {
                        "allow_alias": true
                    }
                }
            ]
        }
    ]
}).build();
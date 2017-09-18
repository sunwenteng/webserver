declare module Share {


//--------------------------------login------------------------------
    class cs_login_login {
        username:string;
        password:string;
    }

    class sc_login_login {
        token:string;
    }

// --------------------------------game------------------------------
    interface cs_game_enter {
        token:string;
    }

    interface sc_game_enter{
        error?:number;
        role:RoleData;
    }

    interface cs_game_pve {
        token:string;
        atkIds:number[];
        monsterId:number;
    }

    interface sc_game_pve {
        error?:number;
        report:BattleReport;
    }

    interface cs_game_heartBeat {
        token:string;
    }

    interface sc_game_heartBeat {
        error?:number;
    }
}

declare module "share" {
    export = Share;
}
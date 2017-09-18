class DynObject {
    _bDirty:boolean = false;

    _data:{[key:string]:any} = {};
    _dirtyData:{[key:string]:any} = {};

    public set(key:string, value:any) {
        if (this._data[key] !== value) {
            this._data[key] = value;
            this._dirtyData[key] = value;
            this._bDirty = true;
        }
    }

    public get(key:string):any {
        return this._data[key];
    }

    public needUpdate():boolean {
        return this._bDirty;
    }

    private clearUpdateMask() {
        this._bDirty = false;
        this._dirtyData = {};
    }

    public buildInitData():{[key:string]:any} {
        this.clearUpdateMask();
        return this._data;
    }

    public buildUpdateData():{[key:string]:any} {
        var ret:{[key:string]:any} = {}, key;
        for (key in this._dirtyData) {
            ret[key] = this._data[key];
        }
        this.clearUpdateMask();
        return ret;
    }

    private clearAllValue() {
        this._data = {};
        this._dirtyData = {};
        this._bDirty = false;
    }

    private getInitObject():{[uid:string]:any} {
        return this._data;
    }

    private getUpdateObject():{[uid:string]:any} {
        return this._dirtyData;
    }
}

export = DynObject;
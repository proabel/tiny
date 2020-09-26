import axios = require('axios');

declare namespace tiny {
    export function release():void;
}

declare function tiny (host: string, options?: any): any;
export = tiny;
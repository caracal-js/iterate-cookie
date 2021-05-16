// -------------------
// This file is shared both by the server and client.
// Do not include any browser or node specific APIs
// -------------------

class SetCookie {
    constructor(val = ''){
        var chunks = val.split(';').map(entry => entry.trim().split('='));
        this.name = chunks[0][0];
        this.value = chunks[0][1] || '';
        this.expires = null;  
        this.max_age = null;
        this.domain = null;
        this.secure = false;
        this.http_only = false;
        this.path = null;
        this.same_site = null;

        chunks.slice(1).forEach(([name = null, val = null]) => {
            if (typeof name != 'string') return;
            switch(name.toLowerCase()){
                case 'domain':
                    this.domain = val;
                    break;
                case 'secure':
                    this.secure = true;
                    break;
                case 'httponly':
                    this.http_only = true;
                    break;
                case 'samesite':
                    this.same_site = val;
                    break;
                case 'path':
                    this.path = val;
                    break;
                case 'expires':
                    this.expires = val;
                    break;
                case 'maxage':
                    this.max_age = val;
                    break;
            };
        });
    };
    serialize(){
        if (!this.name) return '';

        var ret = `${this.name}=${this.value}; `;

        if (this.expires) ret += `Expires=${this.expires}; `;
        if (this.max_age) ret += `Max-Age=${this.max_age}; `;
        if (this.domain) ret += `Domain=${this.domain}; `;
        if (this.secure) ret += `Secure; `;
        if (this.http_only) ret += `HttpOnly; `;
        if (this.path) ret += `Path=${this.path}; `;
        if (this.same_site) ret += `SameSite=${this.same_site}; `;

        return ret;
    };
};
class GetCookie {
    constructor(val){
        val.split(';').map(entry => entry.trim().split('=')).forEach(([name = null, value = '']) => {
            if (!name) return;
            this[name] = value;
        });
    };
    serialize(){
        var ret = '';
        for (let i in this) ret += `${i}=${this[i]}; `;
        return ret;
    };
};

Object.assign(typeof window != 'undefined' ? window : module.exports, {
    SetCookie,
    GetCookie,
});

export interface Profile {
    id: number;
    username: string;
    avatarUrl: string | null;
    subscribersAmount: number;
    firstName: string; 
    lastName: string;
    isActive: boolean;
    stack: string[];
    city: string;
    description: string;
}



export enum LoginType {
    bbGTy2y = 'bbGTy2y',
    hjuYYO = 'hjuYYO',
    a5a = 'a5a'
}


export class Hostname {
    constructor (private readonly hostname: string) { }

    public toUrl(): string {
        return `https://${this.hostname}`;
    }
    public isEnv(name: string): boolean {
        return this.hostname.indexOf(name) !== -1;
    }
    public getLoginType(): LoginType {
        if (this.hostname.indexOf('.YYo.') !==-1) {
            return LoginType.hjuYYO;
        }
        if (this.hostname.indexOf('.a5a.') !==-1) {
            return LoginType.bbGTy2y;
        }
        return LoginType.a5a;
    }
}
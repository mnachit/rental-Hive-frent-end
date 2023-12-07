// user1.model.ts
export class User1 {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public roles: string[],
        public organization: {
            name: string;
            since: number;
            industry: string;
            size: number;
        }
    ) { }
}

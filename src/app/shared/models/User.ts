export class User {
    private username: string;
    private email: string;
    private password: string;
    private birthDate: number;


    constructor(username: string, email: string, password: string, birthDate: number) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
    }
}

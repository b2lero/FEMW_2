export interface User {
    name: string;
    password: {
        pwd: string,
        confirmpwd: string
    };
    date: string;
}

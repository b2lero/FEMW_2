import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private port = 1723;

    private urluser = `http://fenw.etsisi.upm.es:${this.port}/users/`;
    private urlUserLogin = `http://fenw.etsisi.upm.es:${this.port}/users/login/`;
    private urlUserPost = `http://fenw.etsisi.upm.es:${this.port}/users/`;

    constructor(private http: HttpClient) {
    }

    getUser(user: string) {
        return this.http.get(this.urluser + user);
    }

    getUserLogin(user: string, pswd) {
        return this.http.get(this.urlUserLogin + '?username=' + user + '&password=' + pswd, {observe: 'response'});
    }

    postUser(user: User, mytoken: string) {
        return this.http.post(this.urlUserPost, user);
    }

    checkUserExist(username: string) {
        return this.http.get(this.urluser + username);
    }

}

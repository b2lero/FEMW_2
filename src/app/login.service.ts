import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urluser = 'http://fenw.etsisi.upm.es:1723/users/';
  private urlUserLogin = 'http://fenw.etsisi.upm.es:1723/users/login/';

  constructor(private http: HttpClient) { }

  getUser(user: String) {
    return this.http.get(this.urluser + user);
  }

  getUserLogin(user: string, pswd) {
    return this.http.get(this.urlUserLogin + '?username=' + user + '&password=' + pswd);
  }

}

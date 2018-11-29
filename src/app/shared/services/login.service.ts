import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private port = 1723;

  private urluser = `http://fenw.etsisi.upm.es:${this.port}/users/`;
  private urlUserLogin = `http://fenw.etsisi.upm.es:${this.port}/users/login/`;
  private mytoki: string;

  constructor(private http: HttpClient) {
  }

  getUser(user: String) {
    return this.http.get(this.urluser + user);
  }

  getUserLogin(user: string, pswd) {
    return this.http.get(this.urlUserLogin + '?username=' + user + '&password=' + pswd, {observe: 'response'});
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Output()
    toHide = new EventEmitter();

    private usrname;
    private pswd;
    private visible: string;
    private token;
    private error: boolean;

    constructor(private loginservice: LoginService) {
    }

    ngOnInit() {
    }

    connect(usrname, pswd) {
        this.loginservice.getUserLogin(this.usrname, this.pswd).subscribe(
            response => {
                this.token = response.headers.get('Authorization');
                sessionStorage.setItem('token', this.token);
                sessionStorage.setItem('connected', 'true');
                this.error = !this.error;
            }, err => {
                this.error = true;
            }, () => {
                this.visible = 'hide';
                this.toHide.emit(this.visible);
                this.usrname = '';
                this.pswd = '';
            }
        );
    }
}

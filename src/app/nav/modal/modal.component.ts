import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../shared/services/user.service';

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
    private visible = {};
    private token;
    private error: boolean;

    constructor(private loginservice: UserService) {
    }

    ngOnInit() {
    }

    connect(usrname, pswd) {
        this.loginservice.getUserLogin(this.usrname, this.pswd).subscribe(
            response => {
                this.token = response.headers.get('Authorization');
                sessionStorage.setItem('token', this.token);
                this.error = !this.error;
            }, err => {
                this.error = true;
                console.log('Wrong credentials');
            }, () => {
                this.visible = 'hide';
                this.toHide.emit({hide: this.visible, token: this.token});
                this.usrname = '';
                this.pswd = '';
                console.log('Connected');
            }
        );
    }
}

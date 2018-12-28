import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {

    private mymodal;
    private u_token;
    logopath = './assets/img/upm-logo.png';
    private connected: boolean = sessionStorage.getItem('token') ? true : null;

    constructor(private loginservice: UserService, private router: Router) {
    }

    ngOnInit() {
        this.mymodal = $('#modal-login');
    }

    showmodal(e) {
        if (!this.connected) {
            this.mymodal.modal();
        } else {
            console.log('Logged out');
            sessionStorage.clear();
            this.router.navigate(['/index']);
            this.connected = false;
        }
    }

    hidemodal(props) {
        this.mymodal.modal(props.hide);
        this.u_token = props.token;
        this.connected = true;
    }
}

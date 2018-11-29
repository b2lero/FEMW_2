import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/services/login.service';
import {Router} from '@angular/router';
import {isEmpty} from 'rxjs/operators';

declare var $: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {

    private mymodal;
     logopath = './assets/img/upm-logo.png';
    connected: boolean = sessionStorage.getItem('connected') === 'true';
    constructor(private loginservice: LoginService, private router: Router) {
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

    hidemodal(hide: string, token: string) {
        this.mymodal.modal(hide);
        this.connected = true;
    }

}

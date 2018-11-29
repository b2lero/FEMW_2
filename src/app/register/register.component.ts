import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

import {User} from './User';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private user: User;
    private registerForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: this.fb.group({
                pwd: ['', [Validators.required, Validators.minLength(4)]],
                confirmpwd: ['', [Validators.required, Validators.minLength(4)]]
            }),
            birthday: ['', Validators.required]
        });

    }

    get username() {
        return this.registerForm.get('username');
    }

    get email() {
        return this.registerForm.get('email');
    }

    get passwordgroup() {
        return this.registerForm.get('passwordgroup');
    }

    get pwd() {
        return this.registerForm.get('password.pwd');
    }

    get confirmpwd() {
        return this.registerForm.get('password.confirmpwd');
    }

    get date() {
        return this.registerForm.get('email');
    }

}

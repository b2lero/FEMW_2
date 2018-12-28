import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

import {User} from '../shared/models/User';
import {UserService} from '../shared/services/user.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) {
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
        return this.registerForm.get('birthDate');
    }

    private registerForm: FormGroup;
    private isUserSaved = false;

    ngOnInit() {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required], this.validateUsername.bind(this)],
            email: ['', [Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: this.fb.group({
                pwd: ['', [Validators.required, Validators.minLength(1)]], // todo
                confirmpwd: ['', [Validators.required, Validators.minLength(1)]]// todo
            }, {
                validator: this.mustMatch('pwd', 'confirmpwd'),
            }),
            birthDate: ['', Validators.required]
        });
    }

    mustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({mustMatch: true});
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    validateUsername(control: AbstractControl) {
       return this.userservice.checkUserExist(control.value).pipe(
           map(res => ({ usertaken: true })),
           catchError( error => of(null))
       );
    }

    onSubmit() {
        if (this.registerForm.valid) {
            const mytoken = sessionStorage.getItem('token');

            const username = this.username.value;
            const email = this.email.value;
            const password = this.pwd.value;
            const userBirthday = new Date(this.date.value).getTime();

            const  newuser = new User(username, email, password,   userBirthday);

            this.userservice.postUser(newuser, mytoken).subscribe(
                res => {
                    console.log('user saved');
                },
                error => {
                    console.log(error);
                },
                () => {
                        this.isUserSaved = true;
                        setTimeout(() => {
                           this.isUserSaved = false;
                            this.router.navigate(['/index']);
                        }, 2000);
                }
            );
        }
    }

}

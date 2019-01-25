import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {



    // kiteLink = 'https://kite.trade/connect/login?v=3&api_key=2ecedw57getitz4a';

    constructor(
        private auth: AuthService,

    ) { }




    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                this.password.hasError('minLength') ? 'Invalid' : '';
    }

    ngOnInit() {
    }

    onLogin() {
        console.log('On login called');
        this.auth.login().subscribe(
            (data: any) => {
                console.log('The data received is: ', data);
                window.location.href = data.url;
            }, (err) => {
                console.log('The err is: ', err);
            }
        );
    }
}


// http://localhost:8080/api/login/redirect


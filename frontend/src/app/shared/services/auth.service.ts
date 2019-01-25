import { Injectable } from '@angular/core';
import { Config } from '../constants/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    config = new Config();
    url: any;
    constructor(
        private http: HttpClient
    ) {
        // this.url = this.config.SERVER_URL + '/login';
        // this.url = 'https://kite.trade/connect/login?v=3&api_key=2ecedw57getitz4a';


    }

    login() {
        console.log('In auth service ');
        return this.http.get(`http://localhost:8080/login`);
    }
}

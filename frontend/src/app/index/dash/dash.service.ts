import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/shared/constants/config';
import { TokenService } from 'src/app/shared/services/token.service';

@Injectable({
    providedIn: 'root'
})
export class DashService {

    config = new Config();
    profile;
    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) {
        this.profile = JSON.parse(this.tokenService.get('user'));
    }

    checkFunds() {
        return this.http.get(`http://localhost:8080/funds/check?token=${this.profile.access_token}`);
    }
}

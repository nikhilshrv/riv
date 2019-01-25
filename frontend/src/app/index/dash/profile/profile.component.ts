import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile;

    constructor(
        private tokenService: TokenService
    ) {

        this.profile = JSON.parse(this.tokenService.get('user'));
        console.log('The user is: ', this.tokenService.get('user'));
    }

    ngOnInit() {
    }

}

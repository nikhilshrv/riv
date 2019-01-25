import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [TokenService]
})
export class ProfileComponent implements OnInit {

    profile;
    selected = new FormControl(0);

    constructor(
        private tokenService: TokenService
    ) {

        this.profile = JSON.parse(this.tokenService.get('user'));
        console.log('The user is: ', this.tokenService.get('user'));
    }

    ngOnInit() {
    }

    tabClick(event) {
        console.log('Current tab is: ', event);
    }

    changeFocus(event) {
        console.log('Current focus is: ', event);
    }
}

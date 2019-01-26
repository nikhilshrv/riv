import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';
import { FormControl } from '@angular/forms';
import { DashService } from '../dash.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [TokenService, DashService]
})
export class ProfileComponent implements OnInit {

    profile;
    funds_data;

    constructor(
        private tokenService: TokenService,
        private dashService: DashService
    ) {

        this.profile = JSON.parse(this.tokenService.get('user'));
        // console.log('The user is: ', this.tokenService.get('user'));
    }

    ngOnInit() {
    }

    tabClick(event) {
        if (event.index === 2) {
            console.log('Check for funds');
            this.funds_data = undefined;
            this.checkFunds();
        }
    }

    checkFunds() {
        this.dashService.checkFunds().subscribe(
            (data) => {
                console.log('Data is: ', data);
                this.funds_data = data;
            }, (err) => {
                console.log('Err is: ', err);
            }
        );
    }
    changeFocus(event) {
        // console.log('Current focus is: ', event);
    }
}

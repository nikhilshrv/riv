import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../shared/services/token.service';

@Component({
    selector: 'app-index',
    template: `
    <router-outlet></router-outlet>
  `,
    styleUrls: []
})
export class IndexComponent implements OnInit {

    constructor(
        route: ActivatedRoute,
        private router: Router,
        private tokenService: TokenService
        ) {
        console.log('The route param is: ', route.snapshot.queryParams.data);
        if (route.snapshot.queryParams.data !== undefined) {
            this.tokenService.set('user', route.snapshot.queryParams.data);
        }
    }

    ngOnInit() {
        this.router.navigate(['/index/profile']);
    }

}

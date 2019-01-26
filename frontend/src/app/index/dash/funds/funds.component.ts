import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-funds',
    templateUrl: './funds.component.html',
    styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

    @Input() fundData: any;
    equity: any;
    commodity: any;
    constructor() {
        console.log('fund comp constructor ', this.fundData);

    }

    ngOnInit() {
        console.log('fund comp oninit ', this.fundData.message);
        if ((this.fundData !== undefined) && (this.fundData.message === 'success')) {
            this.equity = this.fundData.data.equity;
            this.commodity = this.fundData.data.commodity;
            console.log('The equity is: ', this.fundData.data.equity);
        }
    }

}

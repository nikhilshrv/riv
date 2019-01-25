import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TickerComponent } from './ticker/ticker.component';
import { DemoMaterialModule } from 'src/app/material-module';

@NgModule({
    declarations: [ProfileComponent, TickerComponent],
    imports: [
        CommonModule,
        DashRoutingModule,
        MatTabsModule,
        FormsModule,
        MatIconModule,
        DemoMaterialModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashModule { }

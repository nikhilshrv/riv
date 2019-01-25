import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        DashRoutingModule,
        MatTabsModule,
        FormsModule,
        MatIconModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashModule { }

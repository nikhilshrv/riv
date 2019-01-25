import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'profile',
                loadChildren: './dash/dash.module#DashModule'
            }
        ]

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }

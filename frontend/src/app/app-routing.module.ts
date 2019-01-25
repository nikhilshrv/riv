import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
    }
];

@NgModule({
  imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false,
            onSameUrlNavigation: 'reload',
            preloadingStrategy: PreloadAllModules,
        })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

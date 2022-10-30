import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-page/login-page.component';

import { PagesComponent } from './pages.component';
import { PagesModule } from './pages.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/homepage',
      },
      {
        path: 'login',
        canActivate: [],
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [PagesModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

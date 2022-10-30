import { HomePageComponent } from './home-page/home-page.component';
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
        redirectTo: '/home-page',
      },
      {
        path: 'login',
        canActivate: [],
        component: LoginComponent,
      },
      {
        path: 'home-page',
        canActivate: [],
        loadChildren: () =>
          import('src/app/pages/home-page/home-page-routing.module').then(
            (m) => m.HomePageRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [PagesModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    canActivate: [],
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [],
        component: DashboardComponent,
        children: [],
      },
    ],
  },
];

@NgModule({
  imports: [HomeModule, RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

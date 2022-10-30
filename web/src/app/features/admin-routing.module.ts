import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminModule } from './admin.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    canActivate: [],
    component: AdminComponent,
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
  imports: [AdminModule, RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

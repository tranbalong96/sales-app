import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/features/pages/dashboard/dashboard.component';
import { HomePageComponent } from './home-page.component';
import { HomePageModule } from './home-page.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/features/home-routing.module').then(
            (m) => m.HomeRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [HomePageModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

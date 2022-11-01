import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/features/pages/dashboard/dashboard.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [CommonModule, ClarityModule, RouterModule],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/features/pages/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [CommonModule, ClarityModule, RouterModule],
})
export class AdminModule {}

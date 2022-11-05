import { NavbarComponent } from './../../core/components/navbar/navbar.component';
import { FooterComponent } from './../../core/components/footer/footer.component';
import { HeaderComponent } from './../../core/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AlertComponent,
  ],
  imports: [CommonModule, ClarityModule, RouterModule],
})
export class HomePageModule {}

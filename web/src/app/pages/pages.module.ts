import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ClarityModule } from '@clr/angular';
import { LoginComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesComponent, LoginComponent],
  imports: [CommonModule, RouterModule, ClarityModule, FormsModule],
})
export class PagesModule {}

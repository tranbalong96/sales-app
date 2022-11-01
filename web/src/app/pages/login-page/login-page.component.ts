import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginComponent {
  invalidAccount: boolean = false;
  constructor(private router: Router) {}

  onLogin(): void {
    console.log(123);
    this.router.navigate(['home-page']);
  }
}

import { Component } from '@angular/core';
import { INavbar } from '../../models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor() {}
  navbarData: INavbar[] = [
    {
      icon: 'dashboard',
      title: 'Dashboard',
    },
    {
      icon: 'cog',
      title: 'Master data',
      child: [
        {
          icon: 'crosshairs',
          title: 'Product type',
        },
        {
          icon: 'view-cards',
          title: 'Product',
        },
      ],
    },
  ];
}

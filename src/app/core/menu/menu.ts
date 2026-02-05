import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-menu',
  imports: [MatTabsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  links = [
    { label: 'Conciergerie Airbnb', link: '/conciergerie' },
    { label: 'A propos', link: '/apropos' },
    { label: 'Contact', link: '/contact' },
  ];
  activeLink = this.links[0];

}

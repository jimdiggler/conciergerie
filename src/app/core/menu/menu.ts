import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatTabsModule, RouterModule],
  templateUrl: './menu.html',
})
export class Menu {
  // menu component now renders the full header
}

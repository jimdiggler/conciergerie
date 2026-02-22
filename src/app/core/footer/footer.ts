import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true,
  imports: [RouterModule],
})
export class Footer {
  currentYear = new Date().getFullYear();
}

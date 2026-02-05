import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { Footer } from './core/footer/footer';
import { Menu } from './core/menu/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Home, Footer, Menu, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conciergerie');
}

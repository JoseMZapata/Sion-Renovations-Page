import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Banda } from './components/banda/banda';
import { Ourservices } from './components/ourservices/ourservices';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar,Hero,Banda, Ourservices],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sion-web');
}

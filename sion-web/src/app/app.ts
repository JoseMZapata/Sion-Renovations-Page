import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Banda } from './components/banda/banda';
import { Ourservices } from './components/ourservices/ourservices';
import { ServicesGrid } from './features/services/services-grid/services-grid';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar,Hero,Banda, Ourservices,ServicesGrid,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sion-web');
}

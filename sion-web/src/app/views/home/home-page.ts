import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Banda } from '../../components/banda/banda';
import { Ourservices } from '../../components/ourservices/ourservices';
import { ServicesGrid } from '../../features/services/services-grid/services-grid';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Hero, Banda, Ourservices, ServicesGrid, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}

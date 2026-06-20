import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {

  images: string[] = [
    'assets/heroimages/hero-1.jpeg',
    'assets/heroimages/hero-2.jpeg',
    'assets/heroimages/hero-3.jpeg',
    'assets/heroimages/hero-4.jpeg'
  ];

  currentIndex = 0;
  interval: any;

  // Inyectamos el ID de la plataforma para identificar el entorno de ejecución
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Solo ejecutamos el macro-task si estamos del lado del cliente (navegador)
    if (isPlatformBrowser(this.platformId)) {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  ngOnDestroy() {
    // Verificamos que el intervalo exista antes de limpiarlo
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;
  }
}
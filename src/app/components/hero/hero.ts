import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy{

  images: string[] = [
    'assets/heroimages/hero-1.jpeg',
    'assets/heroimages/hero-2.jpeg',
    'assets/heroimages/hero-3.jpeg',
    'assets/heroimages/hero-4.jpeg'
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
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

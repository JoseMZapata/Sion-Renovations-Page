import { Component} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  tapped = false;

  toggleHero(): void {
    this.tapped = !this.tapped;
  }

  scrollToServices(): void {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      // Hace el scroll vertical automático y suave hasta el inicio de la sección
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
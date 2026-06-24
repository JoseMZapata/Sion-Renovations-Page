import { Component, Input } from '@angular/core';
import { Service } from '../models/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {

  @Input({ required: true })
  service!: Service;
}

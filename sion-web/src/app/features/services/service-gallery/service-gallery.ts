import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Service } from '../models/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-gallery.html',
  styleUrl: './service-gallery.css',
})
export class ServiceGallery {
  @Input({ required: true }) service!: Service;
  @Output() close = new EventEmitter<void>();
}

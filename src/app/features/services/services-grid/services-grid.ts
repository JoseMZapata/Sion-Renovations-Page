import { Component } from '@angular/core';
import { Service } from '../models/service';
import { CommonModule } from '@angular/common';
import { ServiceCard } from '../service-card/service-card';
import { ServiceModal } from '../service-modal/service-modal';
import { ServiceGallery } from '../service-gallery/service-gallery';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule, ServiceCard, ServiceModal, ServiceGallery],
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.css',
})
export class ServicesGrid {
  showModal = false;
  galleryService?: Service;

  services: Service[] = [
    {
      id: 1,
      name: 'Roofing',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328117/roofing_tnt1mu.jpg',
      gallery: []
    },
    {
      id: 2,
      name: 'Concrete',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328119/concrete_rzi4ak.jpg',
      gallery: []
    },
    {
      id: 3,
      name: 'Remodeling',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782256678/remod_ggxpft.jpg',
      gallery: []
    },
    {
      id: 4,
      name: 'Doors & Windows',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328105/doors_windows_q5nzxx.jpg',
      gallery: []
    },
    {
      id: 5,
      name: 'General Construction',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328103/construction_yigfss.jpg',
      gallery: []
    },
    {
      id: 6,
      name: 'Patio Cover',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328097/patio_cover_grhxnd.jpg',
      gallery: []
    },
    {
      id: 7,
      name: 'Framing & Cornice',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328101/framing_cornice_lg8pl6.jpg',
      gallery: []
    },
    {
      id: 8,
      name: 'Adiciones',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328098/adiciones_t8xggv.jpg',
      gallery: []
    },
    {
      id: 9,
      name: 'Plumber',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328111/plumber_rgd1ub.jpg',
      gallery: []
    },
    {
      id: 10,
      name: 'Electric',
      image: 'https://res.cloudinary.com/dbifigwjd/image/upload/v1782328109/electrib_ixusbi.jpg',
      gallery: []
    },
    {
      id: 11,
      name: 'WRITE US',
      image: '',
      gallery: [],
      isSpecial: true
    }
  ];

  openService(service: Service) {

    if (service.isSpecial) {
      this.showModal = true;
      return;
    }

    this.galleryService = service;
  }

  closeModal() {
    this.showModal = false;
  }

  closeGallery() {
    this.galleryService = undefined;
  }



}

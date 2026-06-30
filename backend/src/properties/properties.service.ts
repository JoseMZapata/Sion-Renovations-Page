import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertiesService {

  findAll() {

    return [
      {
        id: 1,
        title: 'Casa Moderna',
        price: 3500000,
      },
      {
        id: 2,
        title: 'Casa Residencial',
        price: 4200000,
      },
    ];
  }
}
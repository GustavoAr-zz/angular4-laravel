import { Injectable } from '@angular/core';
import { Image } from '../../models/image';

@Injectable()
export class ImageService {
  images: Image[] = [
    new Image('1', '1ra', 'Descripcion 1ra imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500?text=1ra'),
    new Image('2', '2da', 'Descripcion 2da imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500?text=2da'),
    new Image('3', '3ra', 'Descripcion 3ra imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500?text=3ra'),
    new Image('4', '4ta', 'Descripcion 4ta imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500?text=4ta'),
    new Image('5', '5ta', 'Descripcion 5ta imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500?text=5ta'),
    new Image('6', '6ta', 'Descripcion 6ta imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500?text=6ta'),
    new Image('7', '7ma', 'Descripcion 7ma imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500?text=7ma'),
    new Image('8', '8va', 'Descripcion 8va imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500?text=8va')
  ];
  constructor() { }
  getImages() {
    return this.images;
  }
}

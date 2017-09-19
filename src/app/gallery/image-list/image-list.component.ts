import {Component, OnInit, Input} from '@angular/core';
import {Image} from '../../models/image';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  images: Image[] = [
    new Image('1', 'Primera', 'Descripcion primera imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500'),
    new Image('2', 'Segunda', 'Descripcion segunda imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500'),
    new Image('3', 'Tercera', 'Descripcion tercera imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500'),
    new Image('4', 'Cuarta', 'Descripcion cuarta imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500'),
    new Image('5', 'Quinta', 'Descripcion quinta imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500'),
    new Image('6', 'Sexta', 'Descripcion sexta imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500'),
    new Image('7', 'Setptima', 'Descripcion septima imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500'),
    new Image('8', 'Octava', 'Descripcion octava imagen', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/800x500')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

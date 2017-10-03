import {Component, OnInit} from '@angular/core';
import {ImageService} from '../services/image/image.service';

@Component({
  selector: 'ng-admin-image-create',
  templateUrl: './admin-image-create.component.html',
  styleUrls: ['./admin-image-create.component.css']
})
export class AdminImageCreateComponent implements OnInit {

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

  createImage(image) {
    this.imageService.addImage(image)
      .subscribe(
        image => console.log(image),
        error => console.log(<any>error)
      );
  }
}

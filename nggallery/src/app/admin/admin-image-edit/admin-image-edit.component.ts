import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-admin-image-edit',
  templateUrl: './admin-image-edit.component.html',
  styleUrls: ['./admin-image-edit.component.css']
})
export class AdminImageEditComponent implements OnInit, OnDestroy {
  id: any;
  params: any;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.activateRoute.params.subscribe(params => this.id = params['id']);
  }
  ngOnDestroy() {
    this.params.unsubscribe();
  }
}

import {routes} from './app.routes';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ImageService} from './services/image/image.service';
import { HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageListComponent} from './gallery/image-list/image-list.component';
import {ImageComponent} from './gallery/image-list/image.component';
import {ImageDetailComponent} from './gallery/image-detail/image-detail.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminImagesListComponent } from './admin/admin-images-list/admin-images-list.component';
import { DashboardComponent } from './admin/dashboard.component';
import { AdminImageListComponent } from './admin/admin-image-list/admin-image-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    DashboardComponent,
    AdminImageListComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    HttpModule,
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

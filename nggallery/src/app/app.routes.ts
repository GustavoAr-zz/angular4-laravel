import {AboutComponent} from './about/about.component';
import {AdminComponent} from './admin/admin.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {adminRoutes} from './admin/admin.routes';

const appRoutes: Routes = [
  {path: '', redirectTo: '/gallery', pathMatch: 'full'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent, children: adminRoutes}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { Routes } from '@angular/router';
import { HomePage } from './views/home/home-page';
import { ProjectGallery } from './views/project-gallery/project-gallery';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projects', component: ProjectGallery },
];

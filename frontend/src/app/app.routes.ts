import { Routes } from '@angular/router';
import { HomeSectionComponent } from './sections/home-section.component';
import { ServicesSectionComponent } from './sections/services-section.component';
import { TrainingSectionComponent } from './sections/training-section.component';
import { ShopSectionComponent } from './sections/shop-section.component';

export const appRoutes: Routes = [
  { path: '', component: HomeSectionComponent, title: 'Saq Clinic — Главная' },
  { path: 'services', component: ServicesSectionComponent, title: 'Saq Clinic — Услуги' },
  { path: 'training', component: TrainingSectionComponent, title: 'Saq Clinic — Обучение' },
  { path: 'shop', component: ShopSectionComponent, title: 'Saq Clinic — Магазин' },
  { path: '**', redirectTo: '' }
];

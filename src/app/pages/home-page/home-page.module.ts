import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';

import { SharedModule } from '../../shared/shared.module';
import { MainMapModule } from '../../features/main-map/main-map.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainMapModule,

  ]
})
export class HomePageModule { }

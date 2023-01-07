import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MapWrapperComponent } from './components/map-wrapper/map-wrapper.component';
import { MapFilterComponent } from './components/map-filter/map-filter.component';



@NgModule({
  declarations: [
    MapWrapperComponent,
    MapFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MapWrapperComponent,
    MapFilterComponent
  ]
})
export class MainMapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MainMenuComponent
  ]
})
export class LayoutModule { }

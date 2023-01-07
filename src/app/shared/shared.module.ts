import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { GMapModule } from 'primeng/gmap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabMenuModule,
    CheckboxModule,
    ButtonModule,
    GMapModule,
  ],
  exports: [
    TabMenuModule,
    CheckboxModule,
    ButtonModule,
    GMapModule,
  ],
})
export class SharedModule {
}

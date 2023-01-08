import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { GMapModule } from 'primeng/gmap';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CheckboxModule,
    ButtonModule,
    GMapModule,
  ],
  exports: [
    MenubarModule,
    CheckboxModule,
    ButtonModule,
    GMapModule,
  ],
})
export class SharedModule {
}

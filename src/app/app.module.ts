import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environment/environment';
import { CommonConfigState } from './shared/states/common-config.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    NgxsModule.forRoot([CommonConfigState],
      {
        developmentMode: !environment.production,
      }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

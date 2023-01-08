import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Config } from './shared/actions/config.actions';
import LoadCommonConfig = Config.LoadCommonConfig;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {


  constructor(private store: Store) {
    this.store.dispatch(new LoadCommonConfig());
  }



}

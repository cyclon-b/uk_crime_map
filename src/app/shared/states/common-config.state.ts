import { CommonConfig } from '../types/common-config';
import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Config } from '../actions/config.actions';
import { withLatestFrom } from 'rxjs';


@State<CommonConfig>({
  name: 'commonConfig',
  defaults: {
    mainMenuItems: []
  }
})

@Injectable({
  providedIn: 'root'
})

export class CommonConfigState {
  constructor(private config: ConfigService) {
  }


  @Action(Config.LoadCommonConfig)
  loadCommonConfig(ctx: StateContext<CommonConfig>): void {
    const state = ctx.getState();
    this.config.loadCommonConfig().subscribe(cfg => {
      ctx.setState({
        ...state,
        mainMenuItems: cfg.mainMenuItems
      });
    });


  }

}

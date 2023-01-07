import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonConfig } from '../types/common-config';
import { ConfigService } from '../services/config.service';

@Injectable({
  providedIn: 'root'
})
export class CommonConfigResolver implements Resolve<CommonConfig> {

  constructor(private config: ConfigService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommonConfig> {
    return this.config.loadCommonConfig();
  }
}

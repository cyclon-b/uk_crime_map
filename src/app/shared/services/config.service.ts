import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { CommonConfig } from '../types/common-config';


const COMMON_CONFIG_URL = '/assets/config/common-config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  constructor(private http: HttpClient) {
  }

  public loadCommonConfig(): Observable<CommonConfig> {
    return this.http.get<CommonConfig>(COMMON_CONFIG_URL).pipe(take(1));
  }

}

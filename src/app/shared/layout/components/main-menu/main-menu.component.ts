import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, share } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit{

  public menuItems$!: Observable<MenuItem[]>

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.menuItems$ = this.store.select(state => state.commonConfig.mainMenuItems).pipe(share())
  }


}

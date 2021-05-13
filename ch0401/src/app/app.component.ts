import { Component } from '@angular/core';
import { Menu } from './Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch0401';
  showNaVbar = true;
  menuIndex = 0;
  choose = 0;
  menus: Menu[] = [];
  constructor() {
    this.menus = [new Menu(
      '第一',
      '#',
      false
    ),
    new Menu(
      '第二',
      '#',
      false
    )]
  }
  toggleNavBar() {
    this.showNaVbar = !this.showNaVbar;
  }
  onMenuClicked(menu: Menu) {
    for (let item of this.menus) {
      item.active = false;
    }
    menu.active = true;
  }

}

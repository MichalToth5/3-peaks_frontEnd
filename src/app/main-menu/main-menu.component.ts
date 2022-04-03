import { Component } from '@angular/core';
import {Router} from "@angular/router";

enum MENU { PATIENTS,
            VACCINES }

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  menu = MENU;

  constructor(private router: Router) { }

  openWindow(m: MENU) {
    if (m === MENU.PATIENTS) {
      this.router.navigate(['/patient']);
    }
    if (m === MENU.VACCINES) {
      this.router.navigate(['/vaccine']);
    }
  }

}

import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[]=[];
  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink: 'home'},
      {label: 'Pizza', routerLink: 'pizza'},
      {label: 'Pasta', routerLink: 'pasta'},
      {label: 'Cart', icon: 'pi pi-shopping-cart', routerLink: 'cart'}
      /*
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
       */
    ];
  }
}

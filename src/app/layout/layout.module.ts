import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from "./header/header.component";
import {TabMenuModule} from "primeng/tabmenu";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule
  ]
})
export class LayoutModule { }

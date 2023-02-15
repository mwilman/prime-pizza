import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    PizzaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MenuCardModule { }

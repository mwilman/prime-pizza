import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import {SharedModule} from "../shared/shared.module";
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    PizzaComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MenuCardModule { }

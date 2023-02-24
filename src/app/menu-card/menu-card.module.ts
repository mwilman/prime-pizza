import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import {SharedModule} from "../shared/shared.module";
import { LandingComponent } from './landing/landing.component';
import {TableModule} from "primeng/table";
import { PastaComponent } from './pasta/pasta.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    PizzaComponent,
    LandingComponent,
    PastaComponent,
    CartComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        TableModule
    ]
})
export class MenuCardModule { }

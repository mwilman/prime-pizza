import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PizzaComponent} from "./menu-card/pizza/pizza.component";
import {LandingComponent} from "./menu-card/landing/landing.component";
import {PastaComponent} from "./menu-card/pasta/pasta.component";

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'pasta', component: PastaComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

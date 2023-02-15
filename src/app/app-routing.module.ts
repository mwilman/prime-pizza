import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PizzaComponent} from "./menu-card/pizza/pizza.component";

const routes: Routes = [
  {path: 'pizza', component: PizzaComponent},
  {path: '', redirectTo: 'pizza', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

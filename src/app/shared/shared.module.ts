import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextfieldComponent } from './textfield/textfield.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TextfieldComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

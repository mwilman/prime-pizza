import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextfieldComponent } from './textfield/textfield.component';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [
    ButtonComponent,
    TextfieldComponent,
  ],
  exports: [
    TextfieldComponent,
    ButtonComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        RippleModule
    ]
})
export class SharedModule { }

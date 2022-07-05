import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { ButtonToggleRoutingModule } from './button-toggle-routing.module';
import { ButtonToggleComponent } from './page/button-toggle/button-toggle.component';

@NgModule({
  declarations: [
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    ButtonToggleRoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ButtonToggleModule { }

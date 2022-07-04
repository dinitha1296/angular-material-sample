import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './page/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ButtonModule { }

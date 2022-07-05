import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './page/card/card.component';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CardModule { }

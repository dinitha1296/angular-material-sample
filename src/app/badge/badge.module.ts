import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './page/badge/badge.component';
import { BadgeRoutingModule } from './badge-routing.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BadgeComponent
  ],
  imports: [
    CommonModule,
    BadgeRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class BadgeModule { }

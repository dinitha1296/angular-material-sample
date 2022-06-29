import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagnitudePipe } from './magnitude.pipe';

@NgModule({
  declarations: [
    MagnitudePipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MagnitudePipe
  ]
})
export class MagnitudeModule { }

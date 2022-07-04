import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { BottomSheetRoutingModule } from './bottom-sheet-routing.module';
import { BottomSheetComponent } from './page/bottom-sheet/bottom-sheet.component';
import { SocialMediaBottomSheetComponent } from './component/social-media-bottom-sheet/social-media-bottom-sheet.component';
import { CommonActionsBottomSheetComponent } from './component/common-actions-bottom-sheet/common-actions-bottom-sheet.component';

@NgModule({
  declarations: [
    BottomSheetComponent,
    SocialMediaBottomSheetComponent,
    CommonActionsBottomSheetComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BottomSheetRoutingModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ]
})
export class BottomSheetModule { }

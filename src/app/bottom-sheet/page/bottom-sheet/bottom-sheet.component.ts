import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CommonActionsBottomSheetComponent } from '../../component/common-actions-bottom-sheet/common-actions-bottom-sheet.component';
import { SocialMediaBottomSheetComponent } from '../../component/social-media-bottom-sheet/social-media-bottom-sheet.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet,
  ) {
  }

  ngOnInit(): void {
  }

  openSocialMediaBottomSheet(): void {
    this._bottomSheet.open(SocialMediaBottomSheetComponent);
  }

  openCommonActionsBottomSheet(): void {
    this._bottomSheet.open(CommonActionsBottomSheetComponent);
  }
}

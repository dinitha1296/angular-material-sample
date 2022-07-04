import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-common-actions-bottom-sheet',
  templateUrl: './common-actions-bottom-sheet.component.html',
  styleUrls: ['./common-actions-bottom-sheet.component.scss']
})
export class CommonActionsBottomSheetComponent implements OnInit {

  // darkTheme!: boolean;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<CommonActionsBottomSheetComponent>
  ) { }

  ngOnInit(): void {
  }

  openLink(): void {
    this._bottomSheetRef.dismiss();
  }

}

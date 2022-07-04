import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/core/theme-service/service';

@Component({
  selector: 'app-social-media-bottom-sheet',
  templateUrl: './social-media-bottom-sheet.component.html',
  styleUrls: ['./social-media-bottom-sheet.component.scss']
})
export class SocialMediaBottomSheetComponent implements OnInit {

  darkTheme!: Observable<boolean>;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<SocialMediaBottomSheetComponent>,
    private _themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.darkTheme = this._themeService.getDarkThemeState();
  }
  
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

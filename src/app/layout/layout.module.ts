import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './component/top-navigation/top-navigation.component';
import { SideNavigationComponent } from './component/side-navigation/side-navigation.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { ThemeServiceModule } from '../core/theme-service/theme-service.module';

@NgModule({
  declarations: [
    TopNavigationComponent,
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    ThemeServiceModule
  ],
  exports: [
    TopNavigationComponent,
    SideNavigationComponent
  ]
})
export class LayoutModule { }

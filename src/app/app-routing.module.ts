import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'autocomplete',
    loadChildren: () => import('./autocomplete/autocomplete.module').then(m => m.AutocompleteModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.module').then(m => m.BadgeModule)
  },
  {
    path: 'bottom-sheet',
    loadChildren: () => import('./bottom-sheet/bottom-sheet.module').then(m => m.BottomSheetModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

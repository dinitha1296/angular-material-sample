import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomSheetComponent } from './page/bottom-sheet/bottom-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: BottomSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottomSheetRoutingModule { }

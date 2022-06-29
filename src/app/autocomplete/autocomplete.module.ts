import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './page/autocomplete/autocomplete.component';
import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MagnitudeModule } from '../ui/pipes/magnitude/magnitude.module';

@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MagnitudeModule
  ]
})
export class AutocompleteModule { }

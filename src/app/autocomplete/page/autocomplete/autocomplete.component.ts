import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { numbers, stateGroups } from '../../shared/const';
import { StateGroup } from '../../shared/model';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  numberControl: FormControl = new FormControl('');

  filteredNumbers?: Observable<string[]>;

  stateControl: FormControl = new FormControl('');

  filteredStateGroups?: Observable<StateGroup[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredNumbers = this.numberControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterNumbers(value || ''))
    );
    this.filteredStateGroups = this.stateControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStateGroup(value || ''))
    );
  }

  private _filterNumbers(value: string): string[] {
    const filterValue = value.toLowerCase();
    return numbers.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterStateGroup(value: string): StateGroup[] {
    const filterValue = value.toLowerCase();
    return stateGroups
      .map(group => ({letter: group.letter, states: group.states.filter(state => state.name.toLowerCase().includes(filterValue))}))
      .filter(group => group.states.length > 0)
  }

}

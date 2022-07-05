import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription[] = [];

  fontStyleControl: FormControl = new FormControl('');

  fontStyleClasses: string = '';

  colorMixControl: FormControl = new FormControl('');

  mixedColor: string = 'rgb(0,0,0)';

  arrowDirectionControl: FormControl = new FormControl('upward');

  arrowDirection: string = 'upward';

  ngOnInit(): void {
    this._subscriptions.push(this.arrowDirectionControl.valueChanges.subscribe(value => {
      this.arrowDirection = value;
    }));

    this._subscriptions.push(this.fontStyleControl.valueChanges.subscribe(values => {
      this.fontStyleClasses = values.join(' ');
    }));

    this._subscriptions.push(this.colorMixControl.valueChanges.subscribe(values => {
      this.mixedColor = this.getColor(values);
    }));
  }

  ngOnDestroy(): void {
      this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getColor(colors: string[]): string {
    return `rgb(${colors.includes('red') ? 255 : 0},${colors.includes('green') ? 255 : 0},${colors.includes('blue') ? 255: 0})`
  }
}

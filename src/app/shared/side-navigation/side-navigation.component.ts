import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Input() sidenavOpened!: boolean;

  routes: route[] = [
    { name: 'Autocomplete', path: '/autocomplete' },
    { name: 'Badge', path: '/badge' },
    { name: 'Bottom Sheet', path: '/bottom-sheet' },
    { name: 'Button', path: '/button' },
    { name: 'Button toggle', path: '/button-toggle' },
    { name: 'Card', path: '/card' },
    { name: 'Checkbox', path: '/checkbox' },
    { name: 'Chips', path: '/chips' },
    { name: 'Core', path: '/core' },
    { name: 'Datepicker', path: '/datepicker' },
    { name: 'Dialog', path: '/dialog' },
    { name: 'Divider', path: '/divider' },
    { name: 'Expansion Panel', path: '/expansion-panel' },
    { name: 'Form field', path: '/form-field' },
    { name: 'Grid list', path: '/grid-list' },
    { name: 'Icon', path: '/icon' },
    { name: 'Input', path: '/input' },
    { name: 'List', path: '/list' },
    { name: 'Menu', path: '/menu' },
    { name: 'Paginator', path: '/paginator' },
    { name: 'Progress bar', path: '/progress-bar' },
    { name: 'Progress spinner', path: '/progress-spinner' },
    { name: 'Radio button', path: '/radio-button' },
    { name: 'Ripples', path: '/ripples' },
    { name: 'Select', path: '/select' },
    { name: 'Sidenav', path: '/sidenav' },
    { name: 'Slide toggle', path: '/slide-toggle' },
    { name: 'Slider', path: '/slider' },
    { name: 'Snackbar', path: '/snackbar' },
    { name: 'Sort header', path: '/sort-header' },
    { name: 'Stepper', path: '/stepper' },
    { name: 'Table', path: '/table' },
    { name: 'Tabs', path: '/tabs' },
    { name: 'Toolbar', path: '/toolbar' },
    { name: 'Tooltip', path: '/tooltip' },
    { name: 'Tree', path: '/tree' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface route {
  name: string,
  path?: string
}

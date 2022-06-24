import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.sass']
})
export class SideNavigationComponent implements OnInit {

  @Input() sidenavOpened!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

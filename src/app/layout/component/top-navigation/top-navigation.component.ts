import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  @Output() menuToggleChange: EventEmitter<void> = new EventEmitter<void>();

  darkTheme: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideMenu(): void {
    this.menuToggleChange.emit();
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark-theme');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  isBadgeVisible: boolean = true;

  isBadgeDisabled: boolean = false;

  badgeCount: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBadgeVisibility(): void {
    this.isBadgeVisible = !this.isBadgeVisible;
  }

  toggleBadgeDisabled(): void {
    this.isBadgeDisabled = !this.isBadgeDisabled;
  }

  decreaseBadgeCount(): void {
    if (this.badgeCount <= 1) return;
    this.badgeCount--;
  }

  increaseBadgeCount(): void {
    if (this.badgeCount >= 10) return;
    this.badgeCount++;
  }

}

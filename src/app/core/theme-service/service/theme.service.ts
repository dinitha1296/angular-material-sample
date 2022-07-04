import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {

  private _subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _isDarkMode: boolean = false;

  private _isDarkModeObservable!: Observable<boolean>;

  private _subscriptions: Subscription[] = [];

  constructor() { 
    this._isDarkModeObservable = this._subject.asObservable();
    this._subscriptions.push(this._isDarkModeObservable.subscribe(mode => this._isDarkMode = mode));
  }

  getDarkThemeState(): Observable<boolean> {
    return this._isDarkModeObservable;
  }

  toggleThemeState(): void {
    document.body.classList.toggle('dark-theme');
    this._subject.next(!this._isDarkMode);
  }

  ngOnDestroy(): void {
      this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
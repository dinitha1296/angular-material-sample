import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    sidenavOpened: boolean = false;

    toggleSidenav(): void {
        this.sidenavOpened = !this.sidenavOpened;
    }
}

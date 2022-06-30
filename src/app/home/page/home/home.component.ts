import { Component, OnInit } from '@angular/core';
import { routes } from '../../shared/const';
import { Route } from '../../shared/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routes: Route[] = routes;

  constructor() { }

  ngOnInit(): void {
  }

}

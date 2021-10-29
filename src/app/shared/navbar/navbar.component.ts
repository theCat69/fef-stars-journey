import { Component, OnInit } from '@angular/core';
import { routes } from './navbar.routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routes = routes;
  display: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.display = false;
  }

  show() {
    this.display = true;
  }

}

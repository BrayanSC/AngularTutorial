import { Component } from '@angular/core';
//
@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html'
  template: `
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a routerLink='active' [routerLink]="['/welcome']">Home</a></li>
    <li><a routerLink='active' [routerLink]="['/products']">Product List</a></li>
  </ul>`
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started T Test';
}

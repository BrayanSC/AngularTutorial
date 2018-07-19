import { Component } from '@angular/core';
//
@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html'
  template: `<h1>{{pageTitle}}</h1>
            <pm-products></pm-products>`
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started T Test';
}

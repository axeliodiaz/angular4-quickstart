import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <app-header></app-header>
    <div class="row">
        <app-left-navigation></app-left-navigation>
        <app-right-content></app-right-content>
    </div>
    <app-footer></app-footer>
    `,
})
export class AppComponent  { name = 'Angular'; }

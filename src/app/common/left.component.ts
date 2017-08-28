import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  template: `
    <div class="col-sm-4">
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let item of items">{{ item }}</li>
        </ul>
    </div>
  `,
  styleUrls: [
      './left.component.css'
  ]
})
export class LeftComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  title:string = "News";
  items:Array<string> = ["Welcome", "Welcome #2"];
}

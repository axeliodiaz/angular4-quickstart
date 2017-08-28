import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  template: `
    <div class="col-sm-4">
        <p class="left-paragraph">Left component</p>
    </div>
  `,
  styleUrls: [
      './left.component.css'
  ]
})
export class LeftComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

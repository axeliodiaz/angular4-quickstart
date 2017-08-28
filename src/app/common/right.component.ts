import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-content',
  template: `
    <div class="col-sm-8">
        <p class="right-paragraph">Right component</p>
    </div>
  `,
  styles: [`
      .right-paragraph {
          border: 1px solid red;
          height: 300px;
      }`
  ],
})
export class RightComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

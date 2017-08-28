import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-content',
  template: `
    <div class="col-sm-8">
        Right component
    </div>
  `,
})
export class RightComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  template: `
    <div class="col-sm-4">
        Left component
    </div>
  `,
})
export class LeftComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

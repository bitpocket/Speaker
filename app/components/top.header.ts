import {Component} from 'angular2/core';

@Component({
  selector: 'top-header',
  template: `
    <div class="row">
      <div class="col-md-3 box"></div>
      <div class="col-md-6 box">
        <div>
          <center class="big-title">SPEAKER</center>
        </div>
      </div>

      <div class="col-md-3 box">
      </div>
    </div>
    `
})

export class TopHeader {
}

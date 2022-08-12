import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  data = 10;
  file = 12;
  names = ""
  update() {
    this.data = Math.random();
    this.file = Math.random();
  }
  updateData(data:any){
    console.log(data)
    this.names = data
  }
}

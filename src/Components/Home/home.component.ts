import { Component } from '@angular/core';

@Component({
  selector: 'homeC',
  templateUrl: './Components/Home/home.html'
})
export class HomeComponent {
  title : string;
  pageStatus : string;

  constructor() {
    this.title = "Sample...";
  }



}

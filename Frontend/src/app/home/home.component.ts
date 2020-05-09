import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myParams: object = {};
  myStyle: object = {};
  constructor() { }

  ngOnInit() {
    this.myParams = {
      particles: {
        number: {
          value: 300,
        }
      }
    };
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input-component',
  templateUrl: './user-input-component.component.html',
  styleUrls: ['./user-input-component.component.css']
})
export class UserInputComponentComponent implements OnInit {
  numPoints: number;
  points: any;
  constructor() { }

  getNum() {
    this.points = Array(this.numPoints);
    return this.points;
  }

  ngOnInit() {
  }

}

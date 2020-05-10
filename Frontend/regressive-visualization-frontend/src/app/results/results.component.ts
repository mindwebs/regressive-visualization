import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from "../rest-service.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  resultsReceived = false;
  result: object;
  params: object;
  constructor(private router: Router, private data: RestServiceService) {
    this.params = this.router.getCurrentNavigation().extras.state;
    this.getResults();
  }

  async getResults()  {
    this.result = await this.data.getData(this.params);
    console.log(this.result);
    this.resultsReceived = true;
  }

  ngOnInit() {
  }

}

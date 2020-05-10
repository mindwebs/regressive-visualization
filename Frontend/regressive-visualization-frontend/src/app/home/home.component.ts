import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myParams: object = {};
  myStyle: object = {};
  closeResult = '';
  nPoints: number;
  x: number[];
  y: number[];
  x1: number;
  @ViewChild('#thinking', { static: true }) thinkModal: TemplateRef<any>;
  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.myParams = {
      particles: {
        number: {
          value: 500,
        }
      }
    };
  }

  createPointsArr() {
    this.x = Array(this.nPoints);
    this.y = Array(this.nPoints);
  }

  updateX(event, i) {
    this.x[i] = parseInt(event.target.value);
    console.log(this.x[i]);
  }

  updateY(event, i) {
    this.y[i] = parseInt(event.target.value);
    console.log(this.y[i]);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  saveData() {
    console.log(this.x);
    console.log(this.y);
    this.router.navigate(['results'], { state: { x: this.x, y: this.y, x1: this.x1 } });
    this.nPoints = 0;
    this.x = [];
    this.y = [];
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.saveData();
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

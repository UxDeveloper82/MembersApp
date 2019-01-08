import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-input',
  templateUrl: './dashboard-input.component.html',
  styleUrls: ['./dashboard-input.component.css']
})
export class DashboardInputComponent implements OnInit {
   model: any = {};
  constructor() { }

  ngOnInit() {
  }

  inputData(model: any) {
    console.log(this.model);
  }

}

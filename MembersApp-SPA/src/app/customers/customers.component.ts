import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.http.get('http://localhost:5000/api/customers')
        .subscribe(response => {
           this.customers = response;
        }, error => {
          console.log(error);
        });
  }

}

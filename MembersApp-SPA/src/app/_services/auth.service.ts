import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  model: any = {};

constructor(private http: HttpClient) { }

  login(model: any) {
    console.log(this.model);
  }
}

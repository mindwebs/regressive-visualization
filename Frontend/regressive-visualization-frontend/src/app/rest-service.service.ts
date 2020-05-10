import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  getData(obj) {
    return this.http.post('http://127.0.0.1:5000/', obj).toPromise();
  }
}

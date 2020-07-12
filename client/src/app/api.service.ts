import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = "http://localhost:3000/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getSmsSortBy(sortBy,start_date,end_date): Observable<any> {
    if (start_date && end_date) {
      return this.httpClient.get(this.api+ `/sms?sortBy=${sortBy}&start_date=${start_date}&end_date=${end_date}`);
    }else{
      return this.httpClient.get(this.api+ `/sms?sortBy=${sortBy}`);
    }
  }

  getAllSms(): Observable<any> {
    return this.httpClient.get(this.api+ `/sms`);
  }

  getSmsByDateRange(start_date,end_date): Observable<any> {
    return this.httpClient.get(this.api+ `/sms?start_date=${start_date}&end_date=${end_date}`);
  }
}

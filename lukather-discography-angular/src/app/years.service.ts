import { Injectable } from '@angular/core';
import { Year } from './year';
import { Headers, Http } from '@angular/http';
import { Title } from './title';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class YearsService {
  private yearsUrl = 'http://localhost:3000/v1/years';

  constructor(private http: Http) { }
  
  getYears(): Promise<Year[]> {
    return this.http.get(this.yearsUrl)
      .toPromise()
      .then(response => response.json().years as Year[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

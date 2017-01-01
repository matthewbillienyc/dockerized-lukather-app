import { Injectable } from '@angular/core';
import { Year } from './year/year';
import { Headers, Http } from '@angular/http';
import { Title } from './title/title';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class YearsService {
  private yearsUrl = 'http://localhost:3000/v1/years';

  constructor(private http: Http) { }

  // Stand in functions in case of db down
  // getYears() {
  //   return [
  //     { year: '1977', titles: [] },
  //     { year: '1978', titles: [] }
  //   ]
  // }

  // getYear(year) {
  //   if (year == '1977') {
  //     return {
  //       year: '1977',
  //       titles: [
  //         {
  //           title: 'song 1977',
  //           artist: 'artist 1977'
  //         }
  //       ]
  //     }
  //   } else if (year == '1978') {
  //     return {
  //       year: '1978',
  //       titles: [
  //         {
  //           title: 'song 1978',
  //           artist: 'artist 1978'
  //         }
  //       ]
  //     }
  //   }
  // }

  getYear(year): Promise<Year> {
    return this.http.get(this.yearsUrl + year)
      .toPromise()
      .then(response => response.json().year as Year)
      .catch(this.handleError)
  }
  
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

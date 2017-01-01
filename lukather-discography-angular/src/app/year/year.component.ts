import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { YearsService } from '../years.service';
import { Year } from './year';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
  providers: [YearsService]
})
export class YearComponent implements OnInit {
  year: Year;

  constructor(
    private yearsService: YearsService,
    private route: ActivatedRoute,
    private location: Location
  ) { };

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.yearsService.getYear(+params['id']))
      .subscribe(year => this.year = year);
  };
}

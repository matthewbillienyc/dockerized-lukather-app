import { Component, OnInit } from '@angular/core';
import { YearsService } from '../years.service';
import { Year } from '../year/year'

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css'],
  providers: [YearsService]
})
export class YearsComponent implements OnInit {
  years: Year[];

  constructor(private yearsService: YearsService) { }

  ngOnInit(): void {
    this.getYears();
  }

  getYears(): void {
    this.years = this.yearsService.getYears().then(years => this.years = years);
  }
}

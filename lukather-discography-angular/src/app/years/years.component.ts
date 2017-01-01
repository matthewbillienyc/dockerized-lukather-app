import { Component, OnInit } from '@angular/core';
import { Year } from './year/year';
import { YearsService } from './years.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})

export class YearsComponent implements OnInit {
  years: Year[];
  
  constructor(private yearsService: YearsService) { };

  ngOnInit(): void {
    this.getYears();
  }

  getYears(): void {
    this.years = this.yearsService.getYears()// .then(years => this.years = years);
  }
}

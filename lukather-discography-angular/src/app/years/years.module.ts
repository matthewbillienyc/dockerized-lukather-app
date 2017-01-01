import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearsService } from './years.service';
import { YearsComponent } from './years.component';
import { Year } from './year/year';
import { Title } from './title/title';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ YearsComponent ],
  exports: [ YearsComponent ],
  providers: [ YearsService ]
})
export class YearsModule { }

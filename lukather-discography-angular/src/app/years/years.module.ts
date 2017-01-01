import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YearsComponent } from './years.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [YearsComponent],
  declarations: [YearsComponent]
})
export class YearsModule { }

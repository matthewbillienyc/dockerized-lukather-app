import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { YearsComponent } from './years/years.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { YearComponent } from './year/year.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    YearsComponent,
    AboutComponent,
    HomeComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'years',
        component: YearsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'years/:year',
        component: YearComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

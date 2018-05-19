import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CarsModule} from './cars/cars.module';
import {CarsService} from './cars/cars.service';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core-module/core.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CarsListComponent} from './cars/cars-list/cars-list.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarsModule,
    HttpModule,
    CoreModule,
    RouterModule.forRoot([
      {path: 'cars', component: <any> CarsListComponent}
    ])
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

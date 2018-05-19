import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CarsModule} from './cars/cars.module';
import {CarsService} from './cars/cars.service';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core-module/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarsModule,
    HttpModule,
    CoreModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

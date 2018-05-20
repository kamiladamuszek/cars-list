import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CarsModule} from './cars/cars.module';
import {CarsService} from './cars/cars.service';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core-module/core.module';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {CarsRoutingModule} from './cars/cars-routing.module';


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
    AppRoutingModule,
    CarsRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

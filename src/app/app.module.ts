import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProducentsComponent } from './components/producents/producents.component';
import { TypesComponent } from './components/types/types.component';
import { BikesComponent } from './components/bikes/bikes.component';

import { ProducentService } from './services/producent.service';
import { BikeService } from './services/bike.service';
import { TypeService } from './services/type.service';

import { AppRoutingModule } from './/app-routing.module';

import { BikeDetailsComponent } from './components/bike-details/bike-details.component';
import { ProducentDetailsComponent } from './components/producent-details/producent-details.component';
import { TypeDetailsComponent } from './components/type-details/type-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ProducentsComponent,
    TypesComponent,
    BikesComponent,
    BikeDetailsComponent,
    ProducentDetailsComponent,
    TypeDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProducentService, BikeService, TypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

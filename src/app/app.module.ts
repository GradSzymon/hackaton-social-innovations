import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProducentsComponent } from './components/producents/producents.component';
import { TypesComponent } from './components/types/types.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { ProducentService } from './services/producent.service';
import { BikeService } from './services/bike.service';
import { TypeService } from './services/type.service';


@NgModule({
  declarations: [
    AppComponent,
    ProducentsComponent,
    TypesComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProducentService, BikeService, TypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

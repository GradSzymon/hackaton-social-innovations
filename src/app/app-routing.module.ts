import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { BikesComponent } from './components/bikes/bikes.component';
import { ProducentsComponent } from './components/producents/producents.component';
import { TypesComponent } from './components/types/types.component';

/* for long URL typing */
// import { BikeDetailsComponent } from '../bike-details/bike-details.component';
// import { ProducentDetailsComponent } from '../producent-details/producent-details.component';
// import { TypeDetailsComponent } from '../type-details/type-details.component';

/* ways of geting through app by url's */
const routes: Routes = [
  { path:'', redirectTo:'/bikes', pathMatch: 'full' }, /* home folder - default */
  { path:'bikes', component: BikesComponent },
  { path:'producents', component: ProducentsComponent },
  { path:'types', component: TypesComponent }
  // { path:'bikes/detail/:id', component: BikeDetailsComponent },
  // { path:'producents/detail/:id', component: ProducentDetailsComponent },
  // { path:'types/detail/:id', component: TypeDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Bike } from '../models/bike';
import { BIKES } from '../tabels/mock-bikes';

@Injectable()
export class BikeService {

  constructor(
    private http: HttpClient) { }

  getBikes(): Observable<Bike[]> {
    return of(BIKES);
  }

}

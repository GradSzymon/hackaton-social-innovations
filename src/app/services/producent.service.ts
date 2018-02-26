import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Producent } from '../models/producent';
import { PRODUCENTS } from '../tabels/mock-producents';

@Injectable()
export class ProducentService {

  constructor(
    private http: HttpClient) { }

  getProducents(): Observable<Producent[]> {
    return of(PRODUCENTS);
  }

}

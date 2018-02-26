import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Type } from '../models/type';
import { TYPES } from '../tabels/mock-types';

@Injectable()
export class TypeService {

  constructor(
    private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    return of(TYPES);
  }

}

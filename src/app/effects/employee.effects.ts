import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from '../services/employee.service';
import * as employee from '../actions/employee.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeEffects {
  constructor(
    private employeeService: EmployeeService,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
      .ofType(employee.LOAD)
      .switchMap(payload => this.employeeService.get()
        // If successful, dispatch success action with result
        .map(res => ({ type: employee.LOAD_SUCCESS, payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: employee.LOAD_FAIL}))
      );
}
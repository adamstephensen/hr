
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app/reducers';
import * as employee from '../app/actions/employee.actions';

import { Employee } from './models/employee/employee';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(private store: Store<fromRoot.State>) {
     this.employees$ = store.select(s => s.employees.entities);
  }

  ngOnInit(): void {
    this.store.dispatch(new employee.LoadAction());
  }
}

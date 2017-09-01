import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee/employee';

@Injectable()
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Employee[]> {
    // return this.http.get('https://api.com');
    const employees: Employee[] = [
      { firstName: 'abe' } as Employee,
      { firstName: 'bill' } as Employee,
    ];
    return Observable.of(employees);
  }


}

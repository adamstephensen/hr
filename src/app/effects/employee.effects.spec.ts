import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { EmployeeEffects } from "../effects/employee.effects";
import { EmployeeService } from "../services/employee.service";
import { Observable } from "rxjs/Observable";

describe('EmployeeEffects', () => {
  let runner, employeeEffects, employeeService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      EmployeeEffects,
      {
        provide: EmployeeService,
        useValue: jasmine.createSpyObj('employeeService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    employeeEffects = TestBed.get(EmployeeEffects);
    employeeService = TestBed.get(EmployeeService);
  });

  describe('employee$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});
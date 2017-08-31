import { reducer } from '../reducers/employee.reducer';
import * as fromEmployee from '../reducers/employee.reducer';

describe('EmployeeReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromEmployee.initialState);
    });
  });

});
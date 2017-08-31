import * as employee from '../actions/employee.actions';
import { Employee } from '../models/employee/employee';

export interface State {
  loading: boolean  ;
  entities: Employee[];
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: [],
  result: []
}

export function reducer(state = initialState, action: employee.Actions): State {
  switch (action.type) {
    case employee.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case employee.LOAD_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case employee.LOAD_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}

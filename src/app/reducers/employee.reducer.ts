import * as employee from '../actions/employee.actions';
import { Employee } from '../models/employee/employee';

export interface State {
  loading: boolean;
  entities: Employee[];
}

export const initialState: State = {
  loading: false,
  entities: []
};

export function reducer(state = initialState, action: employee.Actions): State {
  switch (action.type) {
    case employee.LOAD: {
      return {
        ...state,
        loading: true
      };
    }

    case employee.LOAD_SUCCESS: {

      return {
        ...state,
        loading: false,
        entities: action.payload
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

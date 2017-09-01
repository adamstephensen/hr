import { ActionReducerMap } from '@ngrx/store';

import * as fromEmployee from './employee.reducer';

export interface State {
  employees: fromEmployee.State;
}

export const reducers: ActionReducerMap<State> = {
  employees: fromEmployee.reducer,
};

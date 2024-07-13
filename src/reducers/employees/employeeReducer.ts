import {Employee} from '../../types/employee.types';
import {EmployeesAction, EmployeesState} from './employeeReducer.types';

const initialState: EmployeesState = {
  currentEmployees: <Employee[]>[],
  loadingEmployees: false,
  errorLoadingEmployees: undefined,
  activeEmployee: undefined,
};

export default function reducer(
  state = initialState,
  action: EmployeesAction,
): EmployeesState {
  switch (action.type) {
    case 'loading_all':
      return {
        ...state,
        loadingEmployees: true,
        errorLoadingEmployees: undefined,
      };
    case 'set_current_employees':
      return {
        ...state,
        loadingEmployees: false,
        currentEmployees: action.payload.employees,
      };
    case 'set_active_employee':
      return {
        ...state,
        activeEmployee: action.payload.employee,
      };
    case 'set_loading_error':
      return {
        ...state,
        loadingEmployees: false,
        errorLoadingEmployees: action.payload.error,
      };
    default:
      return state;
  }
}

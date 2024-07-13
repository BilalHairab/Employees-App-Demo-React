import {Dispatch} from 'redux';
import {
  EmployeesAction,
  EmployeesActionLoad,
  EmployeesActionSetCurrentLoaded,
} from './employeeReducer.types';
import {Employee} from '../../types/employee.types';

const fetchEmployees = () => {
  return async function (dispatch: Dispatch<EmployeesAction>) {
    dispatch(setIsLoadingEmployees());
    const employees = <Employee[]>[];
    dispatch(setCurrentEmployees(employees));
  };
};

const setIsLoadingEmployees = (): EmployeesActionLoad => {
  return {
    type: 'loading_all',
    payload: {},
  };
};

const setCurrentEmployees = (
  employees: Employee[],
): EmployeesActionSetCurrentLoaded => {
  return {
    type: 'set_current_employees',
    payload: {
      employees: employees,
    },
  };
};

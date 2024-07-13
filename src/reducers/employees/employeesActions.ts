import {Dispatch} from 'redux';
import {
  EmployeesAction,
  EmployeesActionLoad,
  EmployeesActionSetActiveEmployee,
  EmployeesActionSetCurrentLoaded,
  EmployeesActionSetLoadingError,
} from './employeeReducer.types';
import {Employee} from '../../types/employee.types';
import {getAllEmployeesItems} from '../../utils/employeesDB';
import {fetchEmployees} from '../../utils/employeesRemote';

export const getEmployees = () => {
  return async function (dispatch: Dispatch<EmployeesAction>) {
    dispatch(setIsLoadingEmployees());
    try {
      let employees = await getAllEmployeesItems();
      if (employees.length === 0) {
        employees = await fetchEmployees();
      }
      dispatch(setCurrentEmployees(employees));
    } catch (error) {
      dispatch(setEmployeesLoadingError(`${error} `));
    }
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

const setEmployeesLoadingError = (
  error: string | undefined,
): EmployeesActionSetLoadingError => {
  return {
    type: 'set_loading_error',
    payload: {
      error,
    },
  };
};

export const setActiveEmployee = (
  employee: Employee | undefined,
): EmployeesActionSetActiveEmployee => {
  return {
    type: 'set_active_employee',
    payload: {
      employee,
    },
  };
};

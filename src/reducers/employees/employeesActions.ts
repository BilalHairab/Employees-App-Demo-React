import {Dispatch} from 'redux';
import {
  EmployeesAction,
  EmployeesActionLoad,
  EmployeesActionSetActiveEmployee,
  EmployeesActionSetCurrentLoaded,
  EmployeesActionSetLoadingError,
} from './employeeReducer.types';
import {Employee} from '../../types/employee.types';
import EmployeeDB from '../../db';
import Api from '../../api';

export const getEmployees = () => {
  return async function (dispatch: Dispatch<EmployeesAction>) {
    dispatch(setIsLoadingEmployees());
    try {
      let employees = await EmployeeDB.getAllEmployeesItems();
      if (!employees || employees.length === 0) {
        employees = (await Api.fetchEmployees()) ?? <Employee[]>[];
        if (!employees || employees.length === 0) {
          await EmployeeDB.saveEmployeesItems(employees);
        }
      }
      dispatch(setCurrentEmployees(employees ?? []));
    } catch (error) {
      console.log(`${error?.message} `);
      dispatch(
        setEmployeesLoadingError(
          `${error?.message ?? 'Something Went Wrong, try again later'}`,
        ),
      );
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

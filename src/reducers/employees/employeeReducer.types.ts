import {Employee} from '../../types/employee.types';

export type EmployeesState = {
  currentEmployees: Employee[];
  loadingEmployees: boolean;
  errorLoadingEmployees?: string;
  activeEmployee?: Employee;
};

export type EmployeesAction =
  | EmployeesActionLoad
  | EmployeesActionSetCurrentLoaded
  | EmployeesActionSetActiveEmployee
  | EmployeesActionSetLoadingError;

export type EmployeesActionLoad = {
  type: 'loading_all';
  payload: {};
};

export type EmployeesActionSetCurrentLoaded = {
  type: 'set_current_employees';
  payload: {
    employees: Employee[];
  };
};

export type EmployeesActionSetActiveEmployee = {
  type: 'set_active_employee';
  payload: {
    employee: Employee | undefined;
  };
};

export type EmployeesActionSetLoadingError = {
  type: 'set_loading_error';
  payload: {
    error: string | undefined;
  };
};

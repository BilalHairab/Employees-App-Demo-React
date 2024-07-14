import {Employee} from '../types/employee.types';
import {EmployeesFilter} from '../types/filter.types';

export default {
  getEmptyFilter: (): EmployeesFilter => {
    return {
      name: '',
      age: {
        min: 0,
        max: 0,
      },
      salary: {
        min: 0,
        max: 0,
      },
    };
  },

  applyFilter: (
    employeeFilter: EmployeesFilter,
    employees: Employee[],
  ): Employee[] => {
    var newEmployees: Employee[] = [];
    console.log(`applyFilter ${JSON.stringify(employeeFilter)}`);
    for (let singleEmployee of employees) {
      if (employeeFilter.name && employeeFilter.name !== '') {
        const isOkay = singleEmployee.employee_name
          .toLowerCase()
          .includes(employeeFilter.name.toLowerCase());
        if (!isOkay) {
          continue;
        }
      }
      if (employeeFilter.age.min !== 0) {
        const isOkay = singleEmployee.employee_age >= employeeFilter.age.min;
        if (!isOkay) {
          continue;
        }
      }
      if (employeeFilter.age.max !== 0) {
        const isOkay = singleEmployee.employee_age <= employeeFilter.age.max;
        if (!isOkay) {
          continue;
        }
      }
      if (employeeFilter.salary.min !== 0) {
        const isOkay =
          singleEmployee.employee_salary >= employeeFilter.salary.min;
        if (!isOkay) {
          continue;
        }
      }
      if (employeeFilter.salary.max !== 0) {
        const isOkay =
          singleEmployee.employee_salary <= employeeFilter.salary.max;
        if (!isOkay) {
          continue;
        }
      }
      newEmployees.push(singleEmployee);
    }
    return newEmployees;
  },
};

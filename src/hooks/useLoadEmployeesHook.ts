import {useDispatch, useSelector} from 'react-redux';
import {getEmployees} from '../reducers/employees/employeesActions';
import {RootState} from '../reducers/mainStore';
import {useEffect} from 'react';
import {EmployeesFilter} from '../types/filter.types';
import EmployeeFilterUtil from '../utils/EmployeeFilterUtil';

export default function useLoadEmployees(
  lastRequestTimestamp: number,
  employeeFilter: EmployeesFilter,
) {
  let employees = useSelector((state: RootState) => state.currentEmployees);
  let error = useSelector((state: RootState) => state.errorLoadingEmployees);
  let isLoading = useSelector((state: RootState) => state.loadingEmployees);
  let dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getEmployees());
  }, [lastRequestTimestamp]);
  return {
    employees: EmployeeFilterUtil.applyFilter(employeeFilter, employees ?? []),
    error,
    isLoading,
  };
}

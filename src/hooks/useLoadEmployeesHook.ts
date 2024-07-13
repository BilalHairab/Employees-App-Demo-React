import {useDispatch, useSelector} from 'react-redux';
import {getEmployees} from '../reducers/employees/employeesActions';
import {RootState} from '../reducers/mainStore';
import {useEffect} from 'react';

export default function useLoadEmployees(lastRequestTimestamp: number) {
  let employees = useSelector((state: RootState) => state.currentEmployees);
  let error = useSelector((state: RootState) => state.errorLoadingEmployees);
  let isLoading = useSelector((state: RootState) => state.loadingEmployees);
  let dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getEmployees());
  }, [lastRequestTimestamp]);
  return {
    employees: employees ?? [],
    error,
    isLoading,
  };
}

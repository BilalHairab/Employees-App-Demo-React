import axios from 'axios';
import {Employee} from '../types/employee.types';

const employeesBaseURL = 'https://dummy.restapiexample.com/api/v1/';

export const fetchEmployees = async (): Promise<Employee[]> => {
  const response = await axios
    .create({
      baseURL: employeesBaseURL,
      timeout: 15000,
    })
    .request({
      url: 'employees',
      method: 'GET',
    });
  return response.data;
};

import {Employee} from '../types/employee.types';

export default {
  hasValidImage: (employee: Employee): boolean => {
    if (!employee.profile_image) {
      return false;
    }
    if (employee.profile_image === '') {
      return false;
    }
    return true;
  },
};

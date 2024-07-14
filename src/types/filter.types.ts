export type EmployeesFilter = {
  name: string;
  age: {
    min: number;
    max: number;
  };
  salary: {
    min: number;
    max: number;
  };
};

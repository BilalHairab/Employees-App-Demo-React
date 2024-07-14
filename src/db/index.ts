import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {Employee} from '../types/employee.types';

const tableName = 'Employees';

enablePromise(true);

const getDBConnection = async () => {
  return openDatabase({name: 'employees.db', location: 'default'});
};

const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        id INTEGER PRIMARY KEY, employee_name VARCHAR(25), employee_salary INT(7), employee_age INT(2), profile_image VARCHAR(50)
    );`;

  await db.executeSql(query);
};

export default {
  getAllEmployeesItems: async (): Promise<Employee[]> => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      const employees: Employee[] = [];
      const results = await db.executeSql(`SELECT * FROM ${tableName}`);
      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          employees.push(result.rows.item(index));
        }
      });
      return employees;
    } catch (error) {
      console.error(error);
      throw Error('Failed to get employees !!!');
    }
  },

  saveEmployeesItems: async (employees: Employee[]) => {
    const db = await getDBConnection();
    await createTable(db);
    const insertQuery =
      `INSERT OR REPLACE INTO ${tableName}(id, employee_name, employee_salary, employee_age, profile_image) values` +
      employees
        .map(
          i =>
            `(${i.id}, '${i.employee_name}', '${i.employee_salary}', '${i.employee_age}', '${i.profile_image}')`,
        )
        .join(',');

    return db.executeSql(insertQuery);
  },
};

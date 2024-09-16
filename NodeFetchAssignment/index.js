import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
} from './apiService.js';

/**
 * Starts the application.
 */
async function start() {
  await getEmployees();
  await getEmployeeById(21);
  await createEmployee();
  await updateEmployeeById(14);
  await deleteEmployeeById(15);
}

start();

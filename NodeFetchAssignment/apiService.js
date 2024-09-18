import { writeToFile } from './writeToFile.js';

const baseUrl = 'http://dummy.restapiexample.com/api/v1';

// Handles the API response.
async function handleApiResponse(response, endpoint) {
  if (response.status === 200) {
    const result = await response.json();
    console.log(result);
    writeToFile(endpoint, result);
  } else {
    throw new Error(`Status Code ${response.status} !!! Failed to process ${endpoint}`);
  }
}

// Fetches all employees.
export async function getEmployees() {
  try {
    const response = await fetch(`${baseUrl}/employees`, { method: 'GET' });
    await handleApiResponse(response, 'employees');
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

// Fetches an employee by ID.
export async function getEmployeeById(id) {
  try {
    const response = await fetch(`${baseUrl}/employee/${id}`, { method: 'GET' });
    await handleApiResponse(response, `employee_${id}`);
  } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
  }
}

// Creates a new employee.
export async function createEmployee() {
  try {
    const response = await fetch(`${baseUrl}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'test', salary: '123', age: '23' }),
    });
    await handleApiResponse(response, 'create');
  } catch (error) {
    console.error('Error creating employee:', error);
  }
}

// Updates an employee by ID.
export async function updateEmployeeById(id) {
  try {
    const response = await fetch(`${baseUrl}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'updated name', salary: '456', age: '30' }),
    });
    await handleApiResponse(response, `update_${id}`);
  } catch (error) {
    console.error(`Error updating employee with ID ${id}:`, error);
  }
}

// Deletes an employee by ID.
export async function deleteEmployeeById(id) {
  try {
    const response = await fetch(`${baseUrl}/delete/${id}`, { method: 'DELETE' });
    await handleApiResponse(response, `delete_${id}`);
  } catch (error) {
    console.error(`Error deleting employee with ID ${id}:`, error);
  }
}

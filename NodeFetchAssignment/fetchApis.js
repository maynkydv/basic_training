import { writeToFile  } from './writeToFile.js';

const baseUrl = 'http://dummy.restapiexample.com/api/v1';

export async function getEmployees() {
  try {
    const response = await fetch(`${baseUrl}/employees`, {
      method: 'GET',
    });
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      writeToFile('employees', result);
    } else {
      throw new Error(
        `Status Code ${response.status} !!! Failed to fetch employees`,
      );
    }
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

export async function getEmployeeById(id) {
  try {
    const response = await fetch(`${baseUrl}/employee/${id}`, {
      method: 'GET',
    });
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      writeToFile(`employee_${id}`, result);
    } else {
      throw new Error(
        `Status Code ${response.status} !!! Failed to fetch employee with id ${id}`,
      );
    }
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

export async function createEmployee() {
  try {
    const response = await fetch(`${baseUrl}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'test', salary: '123', age: '23' }),
    });
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      writeToFile('create', result);
    } else {
      throw new Error(
        `Status Code ${response.status} !!! Failed to Create employee `,
      );
    }
  } catch (error) {
    console.error('Error creating employee', error);
  }
}

export async function updateEmployeeById(id) {
  try {
    const response = await fetch(`${baseUrl}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'updated name', salary: '456', age: '30' }),
    });
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      writeToFile(`update_${id}`, result);
    } else {
      throw new Error(
        `Status Code ${response.status} !!! Failed to Update Employee with id ${id}`,
      );
    }
  } catch (error) {
    console.error('Error updating employee', error);
  }
}

export async function deleteEmployeeById(id) {
  try {
    const response = await fetch(`${baseUrl}/delete/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      writeToFile(`delete_${id}`, result);
    } else {
      throw new Error(
        `Status Code ${response.status} !!! Failed to Delete Employee with id ${id} `,
      );
    }
  } catch (error) {
    console.error('Error deleting employee', error);
  }
}

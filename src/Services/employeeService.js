import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/employees";

// Get JWT Token from localStorage
const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Get all employees
export const getEmployees = async () => {
  try {
    const response = await axios.get(API_BASE_URL, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

// Get employee by ID
export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/${id}`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee:", error);
    throw error;
  }
};

// Add new employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(
      API_BASE_URL,
      employeeData,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

// Update employee
export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${id}`,
      employeeData,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};

// Delete employee
export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/${id}`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.data);

  throw error;
}
};
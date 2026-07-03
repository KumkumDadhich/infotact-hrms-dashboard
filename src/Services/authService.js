import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/auth";

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });

  const token = response.data?.data?.token;
  const user = response.data?.data;

  if (token) {
    localStorage.setItem("token", token);
  }

  if (user) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: user.name,
        email: user.email,
        role: user.role,
      })
    );
  }

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getToken = () => localStorage.getItem("token");

export const getUser = () => {
  const raw = localStorage.getItem("user");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const getUserRole = () => getUser()?.role || null;

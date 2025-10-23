import axios from "../../api/axios";



axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = async (email, password) => {
    const response = await axios.post("/login", { email, password });
    return response;
}

export const registerUser =  async(fullname, email, password) => {
    const response = await axios.post("/register",{fullname, email, password});
    return response
}
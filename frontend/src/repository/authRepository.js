import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3006" });

export const register = (user) => {
  return api.post("/register", user);
};
export const loginUser = (user) => {
  return api.post("/login", user);
};

const getToken = () => {
  return localStorage.getItem("token");
};

export const updateUser = async (userData) => {
  try {
    const token = getToken();
    const response = await api.put("/updateUser", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Adjust based on where you store the token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


export default api
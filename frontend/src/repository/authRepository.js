import axios from "axios";

export const api = axios.create({ baseURL: 'http://localhost:5000' });

export const register = (user) => {
  return api.post("/register", user);
};
export const loginUser = (user) => {
    return api.post("/login", user);
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export const updateUser = async (userData) => {
    try {
      const token = getToken();
      const response = await api.put('/updateUser', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
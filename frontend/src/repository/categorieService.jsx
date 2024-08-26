import api from "./authRepository";

const id = localStorage.getItem('month')

export const getCategories = async () => {
    try {
      const response = await api.get(`/getcategories/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching the current categories:', error);
      throw error;
    }
  };

export const postCategorie = async (data) => {
    try {
      const response = await api.post(`/postcategorie/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error posting the categorie:', error);
      throw error;
    }
  };
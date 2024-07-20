import api from "./authRepository";

const categoryId = localStorage.getItem('category')

export const getCurrentMonth = async () => {
  try {
    const response = await api.get('/getmonth');
    return response.data;
  } catch (error) {
    console.error('Error fetching the current month:', error);
    throw error;
  }
};

export const postTransaction = async (data) => {
  try {
    const response = await api.post(`/posttransaction/${categoryId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting the transaction:', error);
    throw error;
  }
};
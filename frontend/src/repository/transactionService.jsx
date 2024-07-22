import api from "./authRepository";

const categoryId = localStorage.getItem('category')

export const gettransaction = async () => {
  try {
    const response = await api.get(`/gettransaction/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the transactions:', error);
    throw error;
  }
};

export const postTransaction = async (data) => {
  try {
    const response = await api.post(`/posttransaction`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting the transaction:', error);
    throw error;
  }
};
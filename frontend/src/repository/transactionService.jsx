import api from "./authRepository";

const categoryId = localStorage.getItem('category')
const transactionId = localStorage.getItem('transaction')

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
export const updateTransaction = async (data) => {
  try {
    const response = await api.put(`/updatetransaction/${transactionId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating the transaction:', error);
    throw error;
  }
};
export const deleteTransaction = async () => {
  try {
    const response = await api.delete(`/deletetransaction/${transactionId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting the transaction:', error);
    throw error;
  }
};
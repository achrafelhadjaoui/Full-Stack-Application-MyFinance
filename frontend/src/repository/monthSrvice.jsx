import api from "./authRepository";

export const getCurrentMonth = async () => {
  try {
    const response = await api.get('/getmonth');
    return response.data;
  } catch (error) {
    console.error('Error fetching the current month:', error);
    throw error;
  }
};

export const postMonth = async (data) => {
  try {
    const response = await api.post('/postmonth', data);
    return response.data;
  } catch (error) {
    console.error('Error posting the month:', error);
    throw error;
  }
};

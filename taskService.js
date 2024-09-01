import axios from './axiosConfig';

const API_URL = '/tasks';

export const getTasks = async () => {
  return await axios.get(API_URL);
};

export const createTask = async (task) => {
  return await axios.post(API_URL, task);
};

export const updateTask = async (id, task) => {
  return await axios.patch(`${API_URL}/${id}`, task);
};

export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

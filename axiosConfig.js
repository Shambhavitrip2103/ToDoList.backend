import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Ensure this matches your server's base URL
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error Response:', error.response);
      alert(`Error: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      console.error('No Response:', error.request);
      alert('Network Error: No response received from the server');
    } else {
      console.error('Error Message:', error.message);
      alert(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default instance;

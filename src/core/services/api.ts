import axios from 'axios';
import appConstants from '../utils/constants';

const apiInstance = axios.create({
  baseURL: `${appConstants.apiUrl}/`,
  timeout: 40000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { apiInstance };

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getUsers = () => axios.get(`${API_URL}users/`);
export const getPosts = () => axios.get(`${API_URL}posts/`);
export const getComments = () => axios.get(`${API_URL}comments/`);

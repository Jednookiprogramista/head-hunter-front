import axiosDefault from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:3001';

export const axios = axiosDefault.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axiosDefault.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

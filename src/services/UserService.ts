import axiosInstance from './axiosInstance';
import axios, { AxiosError, AxiosResponse } from 'axios';
import * as businessTypes from '../config/business-types';

export const signin = async (
  credentials: businessTypes.Credentials,
  callback: (error: AxiosError | null) => void
): Promise<void> => {
  try {
    const response: AxiosResponse = await axiosInstance.post('/users/login', credentials);
    if (response.status === 200) {
      const token = response.headers['x-auth-token'] as string;
      localStorage.setItem('token', token);
      callback(null);
    }
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      callback(error);
    } else {
      callback(null);
    }
  }
};

export const register = async (
  registrationData: businessTypes.Registration,
  callback: (error: AxiosError | null) => void
): Promise<void> => {
  try {
    const response = await axiosInstance.post(`/users/register`, registrationData);
    if (response.status === 200) {
      const token = response.headers['x-auth-token'] as string;
      localStorage.setItem('token', token);
      callback(null);
    }
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      callback(error);
    } else {
      callback(null);
    }
  }
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return token !== null;
};

export const signout = (): void => {
  localStorage.removeItem('token');
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

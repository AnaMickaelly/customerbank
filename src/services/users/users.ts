import api from '../api';
import { UsersProps } from './types';

export const GetUser = async (): Promise<UsersProps | undefined> => {
  try {
    const response = await api.get('/users');
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

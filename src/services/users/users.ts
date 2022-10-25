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

export const DeleteUser = async (id: string): Promise<void> => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateUser = async (
  data: any
): Promise<UsersProps | undefined> => {
  try {
    const response = await api.post('/users', data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

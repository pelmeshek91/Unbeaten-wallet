import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from 'services/walletApi';

export const registerUserThunk = createAsyncThunk('auth/register', user => {
  const response = registerUser(user);
  return response;
});
export const loginUserThunk = createAsyncThunk('auth/login', user => {
  const response = loginUser(user);

  return response;
});
export const logoutThunk = createAsyncThunk(() => {
  logoutUser();
  return;
});
export const refreshUserThunk = createAsyncThunk('auth/refresh', async data => {
  const response = await refreshUser({ sid: data.sid }, data.refresh);
  return response;
});

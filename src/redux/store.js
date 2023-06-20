import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './auth/authSlice';
import { transactionsReducers } from './transcactions/transcactionsSlice';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    transactions: transactionsReducers,
  },
});

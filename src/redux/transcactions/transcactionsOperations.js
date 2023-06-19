import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionExpenses,
  addTransactionIncome,
  getTransactionsExpenses,
  getTransactionsIncome,
} from 'services/walletApi';

export const getTransactionsExpensesThunk = createAsyncThunk(
  'transactions/getExpenses',
  () => {
    const response = getTransactionsExpenses();
    return response;
  }
);
export const addTransactionExpensesThunk = createAsyncThunk(
  'transactions/addExpenses',
  body => {
    const response = addTransactionExpenses(body);
    return response;
  }
);

export const getTransactionsIncomeThunk = createAsyncThunk(
  'transactions/getIncome',
  () => {
    const response = getTransactionsIncome();
    return response;
  }
);

export const addTransactionIncomeThunk = createAsyncThunk(
  'transactions/addIncome',
  body => {
    const response = addTransactionIncome(body);
    return response;
  }
);

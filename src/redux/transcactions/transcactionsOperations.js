import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionExpenses,
  addTransactionIncomes,
  deleteTransaction,
  getTransactionsExpenses,
  getTransactionsIncomes,
  getTransactionsReports,
  getUserInfo,
  updateUserBalance,
} from 'services/walletApi';

export const getTransactionsExpensesThunk = createAsyncThunk(
  'transactions/getExpenses',
  () => {
    const response = getTransactionsExpenses();
    // console.log(response);
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
    const response = getTransactionsIncomes();
    return response;
  }
);

export const addTransactionIncomesThunk = createAsyncThunk(
  'transactions/addIncomes',
  body => {
    const response = addTransactionIncomes(body);
    return response;
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/deleteTransaction',
  id => {
    const response = deleteTransaction(id);
    return response;
  }
);

export const getTransactionsReportsThunk = createAsyncThunk(
  'transactions/reports',
  date => {
    const response = getTransactionsReports(date);
    return response;
  }
);

export const getUserInfoThunk = createAsyncThunk('user/info', () => {
  const info = getUserInfo();
  return info;
});

export const updateUserBalanceThunk = createAsyncThunk(
  'user/balance',
  balance => {
    const response = updateUserBalance(balance);
    return response;
  }
);

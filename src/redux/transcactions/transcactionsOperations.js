import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionExpenses,
  addTransactionIncomes,
  deleteTransaction,
  getTransactionsExpenses,
  getTransactionsIncomes,
} from 'services/walletApi';

export const getTransactionsExpensesThunk = createAsyncThunk(
  'transactions/getExpenses',
  () => {
    const response = getTransactionsExpenses();
    return response;
  },
);
export const addTransactionExpensesThunk = createAsyncThunk(
  'transactions/addExpenses',
  body => {
    const response = addTransactionExpenses(body);
    return response;
  },
);

export const getTransactionsIncomeThunk = createAsyncThunk(
  'transactions/getIncome',
  () => {
    const response = getTransactionsIncomes();
    return response;
  },
);

export const addTransactionIncomesThunk = createAsyncThunk(
  'transactions/addIncomes',
  body => {
    const response = addTransactionIncomes(body);
    return response;
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/addIncomes',
  id => {
    const response = deleteTransaction(id);
    return response;
  },
);

export const updateUserBalanceThunk = createAsyncThunk(
  'transactions/addIncome',
  body => {
    // return {
    //   'newBalance': 100,
    //   'transaction': {
    //     'description': 'Income description',
    //     'amount': 100,
    //     'date': '2020-12-31',
    //     'category': 'Доход',
    //     '_id': '507f1f77bcf86cd799439011',
    //   },
    // };
    const response = addTransactionIncome(body);
    return response;
  },
);

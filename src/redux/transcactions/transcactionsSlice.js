import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addTransactionExpensesThunk,
  getTransactionsExpensesThunk, updateUserBalanceThunk,
} from './transcactionsOperations';
import { registerUserThunk } from '../auth/authOperations';

const updateUserBalance = (state, { payload }) => {
  state.balance = payload.newBalance;
};
const handleGetTransactionsExpenses = (state, { payload }) => {
  state.expenses = payload.expenses;
};
const handleAddTransactionsExpenses = (state, { payload }) => {
  state.expenses.push(payload.transaction);
  state.balance = payload.newBalance;
};
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(updateUserBalanceThunk.fulfilled, updateUserBalance)
      .addCase(
        getTransactionsExpensesThunk.fulfilled,
        handleGetTransactionsExpenses,
      )
      .addCase(
        addTransactionExpensesThunk.fulfilled,
        handleAddTransactionsExpenses,
      ),
});

export const transactionsReducers = transactionsSlice.reducer;

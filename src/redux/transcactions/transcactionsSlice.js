import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addTransactionExpensesThunk,
  getTransactionsExpensesThunk,
} from './transcactionsOperations';

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
      .addCase(
        getTransactionsExpensesThunk.fulfilled,
        handleGetTransactionsExpenses
      )
      .addCase(
        addTransactionExpensesThunk.fulfilled,
        handleAddTransactionsExpenses
      ),
});

export const transactionsReducers = transactionsSlice.reducer;

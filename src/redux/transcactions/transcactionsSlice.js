import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addTransactionExpensesThunk,
  addTransactionIncomesThunk,
  deleteTransactionThunk,
  getTransactionsExpensesThunk,
  getTransactionsIncomeThunk,
  updateUserBalanceThunk,
} from './transcactionsOperations';
import { registerUserThunk } from '../auth/authOperations';

const updateUserBalance = (state, { payload }) => {
  state.balance = payload.newBalance;
};
const handleGetTransactionsExpenses = (state, { payload }) => {
  state.expenses = payload.expenses;
  state.error = null;
  state.isLoading = false;
};
const handleAddTransactionsExpenses = (state, { payload }) => {
  state.expenses.push(payload.transaction);
  state.balance = payload.newBalance;
  state.error = null;
  state.isLoading = false;
};

const handleGetTransactionsIncomes = (state, { payload }) => {
  state.incomes = payload.expenses;
  state.error = null;
  state.isLoading = false;
};

const handleAddTransactionsIncomes = (state, { payload }) => {
  state.incomes.push(payload.transaction);
  state.balance = payload.newBalance;
  state.error = null;
  state.isLoading = false;
};
const handleDeleteTransaction = (state, { payload }) => {
  state.balance = payload.newBalance;
  state.error = null;
  state.isLoading = false;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(updateUserBalanceThunk.fulfilled, updateUserBalance)
      .addCase(
        getTransactionsExpensesThunk.fulfilled,
        handleGetTransactionsExpenses
      )
      .addCase(
        addTransactionExpensesThunk.fulfilled,
        handleAddTransactionsExpenses
      )
      .addCase(
        getTransactionsIncomeThunk.fulfilled,
        handleGetTransactionsIncomes
      )
      .addCase(
        addTransactionIncomesThunk.fulfilled,
        handleAddTransactionsIncomes
      )
      .addCase(deleteTransactionThunk.fulfilled, handleDeleteTransaction)
      .addMatcher(
        isAnyOf(
          getTransactionsExpensesThunk.pending,
          addTransactionExpensesThunk.pending,
          getTransactionsIncomeThunk.pending,
          addTransactionIncomesThunk.pending,
          deleteTransactionThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getTransactionsExpensesThunk.rejected,
          addTransactionExpensesThunk.rejected,
          getTransactionsIncomeThunk.rejected,
          addTransactionIncomesThunk.rejected,
          deleteTransactionThunk.rejected
        ),
        handleRejected
      ),
});

export const transactionsReducers = transactionsSlice.reducer;

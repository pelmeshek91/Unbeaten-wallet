import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addTransactionExpensesThunk,
  addTransactionIncomesThunk,
  deleteTransactionThunk,
  getTransactionsExpensesThunk,
  getTransactionsIncomeThunk,
  getUserInfoThunk,
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

const updateBalanceFulfilled = (state, { payload }) => {
  state.balance = payload.newBalance;
  state.error = null;
};
const getBalanceFulfilled = (state, { payload }) => {
  state.balance = payload.balance;
  state.error = null;
};

const handleInfoRejected = (state, { error }) => {
  state.error = error.message;
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
      .addCase(getUserInfoThunk.fulfilled, getBalanceFulfilled)
      .addCase(updateUserBalanceThunk.fulfilled, updateBalanceFulfilled)
      .addMatcher(
        isAnyOf(getUserInfoThunk.rejected, updateUserBalanceThunk.rejected),
        handleInfoRejected
      )
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

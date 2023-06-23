import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { transactionsReducers } from './transcactions/transcactionsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'sid', 'email'],
};
const transactionsPersistConfig = {
  key: 'transactions',
  storage,
  whitelist: [
    'balance',
    'expenses',
    'incomes',
    'monthStatsIncome',
    'monthStatsExpenses',
  ],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedTransactionsReducer = persistReducer(
  transactionsPersistConfig,
  transactionsReducers
);
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: persistedTransactionsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import ReportPage from 'pages/ReportPage/ReportPage';
import LoginPage from 'pages/LoginPage/LoginPage';
// import TransactionsExpenses from './TransactionsExpenses/TransactionsExpenses';
import TransactionsIncome from './TransactionsIncome/TransactionsIncome';
import PublicRoute from './Routs/PublicRouts';
import PrivateRoute from './Routs/PrivateRouts';
import TransactionsExpenses from './TransactionsExpenses/TransactionsExpenses';
import { setAuthHeader } from 'services/walletApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectSid, selectToken } from 'redux/auth/authSelectors';

import { useState, useEffect } from 'react';
import { refreshUserThunk } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!refresh) return;
  //   console.log(refresh);

  //   dispatch(refreshUserThunk({ sid, refresh }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}>
          <Route
            index
            element={
              <PrivateRoute>
                <TransactionsExpenses />
              </PrivateRoute>
            }
          />
          <Route
            path="incomes"
            element={
              <PrivateRoute>
                <TransactionsIncome />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="report"
          element={
            <PrivateRoute>
              <ReportPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

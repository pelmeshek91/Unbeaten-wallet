import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import ReportPage from 'pages/ReportPage/ReportPage';
import LoginPage from 'pages/LoginPage/LoginPage';
// import TransactionsExpenses from './TransactionsExpenses/TransactionsExpenses';
import TransactionsIncome from './TransactionsIncome/TransactionsIncome';
import PublicRoute from './Routs/PublicRouts';
import PrivateRoute from './Routs/PrivateRouts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="transactions-income"
          element={
            <PrivateRoute>
              <TransactionsIncome />
            </PrivateRoute>
          }
        />
        <Route
          path="report"
          element={
            <PrivateRoute>
              <ReportPage />
            </PrivateRoute>
          }
        >
          <Route path="expenses" />
          <Route path="income" />
        </Route>

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

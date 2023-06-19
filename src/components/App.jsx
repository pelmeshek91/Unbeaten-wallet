import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import ReportPage from 'pages/ReportPage/ReportPage';
import LoginPage from 'pages/LoginPage/LoginPage';
// import TransactionsExpenses from './TransactionsExpenses/TransactionsExpenses';
import TransactionsIncome from './TransactionsIncome/TransactionsIncome';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="transactions-income" element={<TransactionsIncome />} />
        <Route path="report" element={<ReportPage />}>
          <Route path="expenses" />
          <Route path="income" />
        </Route>

        <Route path="register" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

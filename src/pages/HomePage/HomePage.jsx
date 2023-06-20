import TotalBalance from 'components/TotalBalance/TotalBalance';
import TransactionsExpenses from 'components/TransactionsExpenses/TransactionsExpenses';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HomePage = () => {
  
  return (
    <>
      <TotalBalance />
      <div>
        <NavLink to="/">EXPENSES</NavLink>
        <NavLink to="incomes">INCOME</NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;

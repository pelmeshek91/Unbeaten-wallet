import TotalBalance from 'components/TotalBalance/TotalBalance';
// import TransactionsExpenses from 'components/TransactionsExpenses/TransactionsExpenses';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ButtonLink } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <TotalBalance />
      <div>
        <ButtonLink to="/">EXPENSES</ButtonLink>
        <ButtonLink to="incomes">INCOME</ButtonLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;

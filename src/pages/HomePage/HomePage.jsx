import TotalBalance from 'components/TotalBalance/TotalBalance';
// import TransactionsExpenses from 'components/TransactionsExpenses/TransactionsExpenses';
import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ButtonLink } from './HomePage.styled';
import { IoMdStats } from 'react-icons/io';

const HomePage = () => {
  return (
    <>
      <TotalBalance />

      <Link to="report">
        Reports <IoMdStats />
      </Link>
      <div>
        <ButtonLink to="expenses">EXPENSES</ButtonLink>
        <ButtonLink to="incomes">INCOME</ButtonLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;

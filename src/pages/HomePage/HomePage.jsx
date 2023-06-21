import TotalBalance from 'components/TotalBalance/TotalBalance';
// import TransactionsExpenses from 'components/TransactionsExpenses/TransactionsExpenses';
import { Suspense, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { ButtonLink } from './HomePage.styled';
import { IoMdStats } from 'react-icons/io';

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/expenses');
  }, []);

  return (
    <>
      <TotalBalance />
      <NavLink to="report">
        Reports <IoMdStats />
      </NavLink>
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

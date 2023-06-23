/* eslint-disable react-hooks/exhaustive-deps */
import TotalBalance from 'components/TotalBalance/TotalBalance';
// import TransactionsExpenses from 'components/TransactionsExpenses/TransactionsExpenses';
import { Suspense, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { ButtonLink } from './HomePage.styled';
import { IoMdStats } from 'react-icons/io';
// import ellipse from '../../img/decor-img/Ellipse-bigger.png';
// import rectangle from '../../img/decor-img/Rectangle-desctop.png';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/expenses');
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default HomePage;

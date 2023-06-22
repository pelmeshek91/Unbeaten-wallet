/* eslint-disable react-hooks/exhaustive-deps */
import TotalBalance from 'components/TotalBalance/TotalBalance';
// import TransactionsExpenses from 'components/TransactionsExpenses/TransactionsExpenses';
import { Suspense, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import {
  ButtonLink,
  BodyContainer,
  EllipseImg,
  RectangleImg,
} from './HomePage.styled';
import { IoMdStats } from 'react-icons/io';
import ellipse from '../../img/decor-img/Ellipse-bigger.png';
import rectangle from '../../img/decor-img/Rectangle-desctop.png';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/expenses');
  }, []);

  return (
    <BodyContainer>
      <EllipseImg src={ellipse} alt="ellipse" />
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
      <RectangleImg src={rectangle} alt="rectangle" />
    </BodyContainer>
  );
};

export default HomePage;

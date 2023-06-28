/* eslint-disable react-hooks/exhaustive-deps */
import TotalBalance from 'components/TotalBalance/TotalBalance';

import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  ButtonTrans,
  StyledLink,
  Wrapper,
  SectionBtn,
} from './HomePage.styled';
// import { MobileFormTransactions } from '../../components/Mobile/MobileTransactions/MobileFormTransactions.styled';
import { ButtonLink } from './HomePage.styled';
import { IoMdStats } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';

import { IoIosAddCircle } from 'react-icons/io';
import { useToggle } from 'components/hooks/useToggle';
import MobileFormTransactions from 'components/Mobile/MobileTransactions/MobileFormTransactions';
import Calendar from 'components/Date/Date';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const navigate = useNavigate();

  const { isOpen, open, close } = useToggle();
  const date = useSelector(state => state.transactions.date);
  const currentDate = date.toISOString().split('T')[0];
  useEffect(() => {
    navigate('/expenses');
  }, []);

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div>
      {isMobile && (
        <ButtonTrans onClick={open}>
          <IoIosAddCircle style={{ fill: '#42A652', width: 15 }} /> ADD
          TRANSACTIONS
        </ButtonTrans>
      )}
      {isOpen && isMobile && (
        <MobileFormTransactions onClose={close} currentDate={currentDate} />
      )}
      <Wrapper>
        <TotalBalance />

        <StyledLink to="report">
          Reports <IoMdStats />
        </StyledLink>
      </Wrapper>
      {isMobile && <Calendar />}
      <SectionBtn>
        <ButtonLink to="expenses">EXPENSES</ButtonLink>
        <ButtonLink to="incomes">INCOME</ButtonLink>
      </SectionBtn>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HomePage;

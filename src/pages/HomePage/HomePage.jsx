/* eslint-disable react-hooks/exhaustive-deps */
import TotalBalance from 'components/TotalBalance/TotalBalance';

import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { enGB } from 'date-fns/locale';
import { StyledLink, Wrapper } from './HomePage.styled';
import MobileFormTransactions from 'components/Mobile/MobileTransactions/MobileFormTransactions';
import { ButtonLink } from './HomePage.styled';
import { IoMdStats } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import { device } from 'utilits/mediaQuery';
import { useState } from 'react';
import { DivContainer, InputDate } from 'components/Form/Form.styled';
import { ToastContainer } from 'react-toastify';
import { BsCalendar4Week } from 'react-icons/bs';
import ReactDatePicker from 'react-datepicker';
import { forwardRef } from 'react';
import { useToggle } from 'components/hooks/useToggle';

const HomePage = () => {
  const navigate = useNavigate();

  const { isOpen, open, close } = useToggle();

  const [selectedDate, setSelectedDate] = useState(new Date()); ///записуємо  в початковий стан дату сьогоднішню
  const currrentDate = selectedDate.toISOString().split('T')[0];
  useEffect(() => {
    navigate('/expenses');
  }, []);
  const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <InputDate
      value={value}
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      onKeyDown={e => {
        e.preventDefault();
      }}
    ></InputDate>
  ));
  const isMobile = useMediaQuery({
    query: `(${device.mobileM}) and (${device.mobileL})`,
  });
  // const isTable = useMediaQuery({
  //   query: `(${device.tablet})`,
  // });
  // const isDesktop = useMediaQuery({
  //   query: `(${device.desktop})`,
  // });

  return (
    <div>
      {!isMobile && <button onClick={open}>ADD TRANSACTIONS</button>}
      {isOpen && (
        <MobileFormTransactions
          isOpen={isOpen}
          onClose={close}
          currrentDate={currrentDate}
        />
      )}
      <Wrapper>
        <TotalBalance />
        {!isMobile && (
          <>
            <DivContainer>
              <ToastContainer />
              <BsCalendar4Week
                style={{ width: '20px', height: '20px', fill: '#C7CCDC' }}
              />
            </DivContainer>
            <ReactDatePicker
              dateFormat="dd.MM.yyyy"
              selected={selectedDate}
              onChange={date => {
                setSelectedDate(date);
              }}
              locale={enGB}
              maxDate={new Date()}
              calendarClassName="calendar"
              className="datepicker"
              customInput={<CustomInput />}
            />
          </>
        )}

        <StyledLink to="report">
          Reports <IoMdStats />
        </StyledLink>
      </Wrapper>

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

import { forwardRef } from 'react';

import { enGB } from 'date-fns/locale';
import { ToastContainer } from 'react-toastify';
import { BsCalendar4Week } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'redux/transcactions/transcactionsSlice';
import { DateWrapper, DivContainer, InputDate } from './Date.styled';
import ReactDatePicker from 'react-datepicker';
const Calendar = () => {
 
  const date = useSelector(state => state.transactions.date);

  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();

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
  return (
    <DateWrapper>
      <DivContainer>
        <ToastContainer />
        <BsCalendar4Week
          style={{ width: '20px', height: '20px', fill: '#C7CCDC' }}
        />
      </DivContainer>
      <ReactDatePicker
        dateFormat="dd.MM.yyyy"
        selected={date}
        onChange={date => {
          dispatch(actions.changeFilter(date));
        }}
        locale={enGB}
        maxDate={new Date()}
        minDate={new Date(currentYear, 0, 1)}
        calendarClassName="calendar"
        className="datepicker"
        customInput={<CustomInput />}
      />
    </DateWrapper>
  );
};

export default Calendar;

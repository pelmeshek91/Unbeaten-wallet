import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enGB } from 'date-fns/locale';
import { forwardRef, useState } from 'react';
import { DivContainer, Input } from './App.styled';
import { BsCalendar2DateFill } from 'react-icons/bs';
import './app.css';

export const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); ///записуємо  в початковий стан дату сьогоднішню

  //  використовуємо forwardRef шоб передати ref з DatePicker комп до внутрішньої комп CustomInput
  const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <Input
      value={value}
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      onKeyDown={e => {
        e.preventDefault();
      }}
    ></Input>
  ));

  return (
    <DivContainer>
      {/* icon calendaryk */}
      <BsCalendar2DateFill style={{ width: '20px', height: '20px' }} />
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          // console.log(selectedDate);
        }}
        locale={enGB}
        maxDate={new Date()}
        calendarClassName="calendar"
        className="datepicker"
        customInput={<CustomInput />}
      />
    </DivContainer>
  );
};

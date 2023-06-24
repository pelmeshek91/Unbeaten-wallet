import { TransactionForm } from 'components/Form/Form';
import { ContainerFormDate, Div } from './TransactionsContainer.styled';
import { TransactionsSummary } from 'components/Summary/Summary';
import { Table } from 'components/Table/Table';
import { forwardRef, useState } from 'react';
import { DivContainer, InputDate } from 'components/Form/Form.styled';
import ReactDatePicker from 'react-datepicker';
import { enGB } from 'date-fns/locale';
import { ToastContainer } from 'react-toastify';
import { BsCalendar4Week } from 'react-icons/bs';

export function TransactionsContainer() {
  const [selectedDate, setSelectedDate] = useState(new Date()); ///записуємо  в початковий стан дату сьогоднішню
  const currrentDate = selectedDate.toISOString().split('T')[0];
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
    <Div>
      <ContainerFormDate>
        <DivContainer>
          <ToastContainer />
          {/* icon calendaryk */}
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

        <TransactionForm currrentDate={currrentDate} />
      </ContainerFormDate>

      <Table currrentDate={currrentDate} />
      <TransactionsSummary />
    </Div>
  );
}

import Select from 'react-select';
import { forwardRef, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { CiCalculator1 } from 'react-icons/ci';
import DatePicker from 'react-datepicker';

import {
  BtnContainer,
  ClearBtn,
  Container,
  DivContainer,
  Form,
  IconContainer,
  Input,
  InputBtn,
  InputDate,
  InputNum,
  MainContainer,
} from './Form.styled';
import './form.css';
import {
  addTransactionExpensesThunk,
  addTransactionIncomesThunk,
} from 'redux/transcactions/transcactionsOperations';
import { incomes, expenses } from '../../utilits/category';
import { useParams } from 'react-router';
import { enGB } from 'date-fns/locale';
import { BsCalendar4Week } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
// import { DivContainer, InputDate } from 'components/Date/Date.styled';
// import { TransactionDate } from 'components/Date/Date';
// import '../Date/date.css';

export const TransactionForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const formRef = useRef(null);
  const { expenses: key } = useParams();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date()); ///записуємо  в початковий стан дату сьогоднішню
  const currrentDate = selectedDate.toISOString().split('T')[0];
  const { balance, expenses: trans } = useSelector(state => state.transactions);

  //  використовуємо forwardRef шоб передати ref з DatePicker комп до внутрішньої комп CustomInput
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

  const handleFormSubmit = e => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;
    const description = e.target.elements.description.value;
    const category = e.target.elements.category.value;

    if (key === 'expenses') {
      const payload = {
        description,
        amount: Number(amount),
        category,
        date: currrentDate,
      };
      dispatch(addTransactionExpensesThunk(payload))
        .unwrap()
        .then(() => {})
        .catch(error => toast.error(error.message));
    } else {
      const payload = {
        description,
        amount: Number(amount),
        category,
        date: currrentDate,
      };

      dispatch(addTransactionIncomesThunk(payload))
        .unwrap()
        .then(() => {})
        .catch(error => toast.error(error.message));
    }

    //   очистка форми
    formRef.current.reset();
    setSelectedOption(null);
  };

  return (
    <>
      <DivContainer>
        <ToastContainer />
        {/* icon calendaryk */}
        <BsCalendar4Week style={{ width: '20px', height: '20px' }} />
        <DatePicker
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
      </DivContainer>
      <MainContainer>
        <div>
          <Form ref={formRef} onSubmit={handleFormSubmit}>
            <Input
              type="text"
              placeholder="Product description"
              required
              name="description"
            />
            <Select
              className="select-container"
              value={selectedOption}
              name="category"
              required
              placeholder="Product category"
              menuShouldBlockScroll={true}
              menuShouldScrollIntoView={false}
              classNamePrefix="select"
              onChange={option => setSelectedOption(option)}
              options={key === 'expenses' ? expenses : incomes}
            />
            <Container>
              <InputNum
                type="number"
                name="amount"
                placeholder="0.00"
                required
              ></InputNum>
              <IconContainer>
                <CiCalculator1 style={{ width: '20px', height: '20px' }} />
              </IconContainer>
            </Container>

            <BtnContainer>
              <InputBtn type="submit" disabled={!balance && !trans.length}>
                Input
              </InputBtn>
              <ClearBtn type="reset">Clear</ClearBtn>
            </BtnContainer>
          </Form>
        </div>
      </MainContainer>
    </>
  );
};

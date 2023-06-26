import Select from 'react-select';
import { useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { CiCalculator1, CiCircleChevLeft } from 'react-icons/ci';
import Header from '../../Header/Header';
import {
  ButtonTx,
  BtnContainer,
  ClearBtn,
  Container,
  Form,
  IconContainer,
  Input,
  InputBtn,
  InputNum,
  MainContainer,
  Overlay,
} from './MobileFormTransactions.styled';
import './mobile.css';
import {
  addTransactionExpensesThunk,
  addTransactionIncomesThunk,
} from 'redux/transcactions/transcactionsOperations';
import { incomes, expenses } from '../../../utilits/category';
import { useParams } from 'react-router';

import { toast } from 'react-toastify';

const initialState = { description: '', amount: '' };

export const MobileFormTransactions = ({ currrentDate, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [form, setForm] = useState(initialState);
  const formRef = useRef(null);
  const { expenses: key } = useParams();
  const dispatch = useDispatch();

  const { balance, expenses: trans } = useSelector(state => state.transactions);
  const handleChange = ({ target: { name, value } }) => {
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;
    const description = e.target.elements.description.value;
    const category = e.target.elements.category.value;
    if (!description) {
      toast.error('Please enter the description');
      return;
    } else if (!category) {
      toast.error('Please choose the category');
      return;
    } else if (!amount) {
      toast.error('Please enter the sum');
      return;
    }
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
    setForm(initialState);
    setSelectedOption(null);
    onClose();
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <Header />

      <ButtonTx onClick={onClose}>
        <CiCircleChevLeft
          style={{
            width: '30px',
            height: '30px',
            fill: '#C7CCDC',
          }}
        />
        To transaction
      </ButtonTx>
      <MainContainer>
        <div>
          <Form noValidate ref={formRef} onSubmit={handleFormSubmit}>
            <Input
              type="text"
              placeholder="Product description"
              required
              name="description"
              value={form.description}
              onChange={handleChange}
              autoComplete="off"
            />

            <Select
              //   styles={{ width: 280 }}
              className="select-container-mobile"
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
                maxLength={7}
                name="amount"
                placeholder="00.00 UAH"
                required
                value={form.amount}
                onChange={handleChange}
                decimalScale={2}
                autoComplete="off"
              />

              <IconContainer>
                |
                <CiCalculator1
                  style={{ width: '22px', height: '22px', fill: '#C7CCDC' }}
                />
              </IconContainer>
            </Container>

            <BtnContainer>
              <InputBtn type="submit" disabled={!balance && !trans.length}>
                Input
              </InputBtn>
              <ClearBtn onClick={() => setForm(initialState)}>Clear</ClearBtn>
            </BtnContainer>
          </Form>
        </div>
      </MainContainer>
    </Overlay>
  );
};

export default MobileFormTransactions;

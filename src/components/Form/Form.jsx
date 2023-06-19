import Select from 'react-select';
import { useRef, useState } from 'react';
// import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { CiCalculator1 } from 'react-icons/ci';
import {
  BtnContainer,
  ClearBtn,
  Container,
  DivContainer,
  Form,
  IconContainer,
  Input,
  InputBtn,
  InputNum,
} from './App.styled';
import './app.css';
import { addTransactionExpensesThunk } from 'redux/transcactions/transcactionsOperations';

export const TransactionForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;
    const description = e.target.elements.description.value;
    const category = e.target.elements.category.value;

    const payload = {
      description,
      amount: Number(amount),
      category,
    };
    dispatch(addTransactionExpensesThunk(payload));
    formRef.current.reset();
    setSelectedOption(null);
  };

  return (
    <DivContainer>
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
          onChange={null}
          classNamePrefix="select"
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
          <InputBtn type="submit">Input</InputBtn>
          <ClearBtn type="reset">Clear</ClearBtn>
        </BtnContainer>
      </Form>
    </DivContainer>
  );
};

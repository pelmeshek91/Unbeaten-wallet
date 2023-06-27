import React from 'react';
import {
  FormAmount,
  TextAmound,
  TotalAmoundPlus,
  TotalAmoundMin,
  Container,
} from './ReportAmount.styled';
import { useSelector } from 'react-redux';

const ReportAmount = () => {
  const { transactions } = useSelector(state => state.transactions);

  return (
    <FormAmount>
      <Container>
        <TextAmound>Expenses:</TextAmound>
        <TotalAmoundMin>
          - {transactions?.expenses.expenseTotal} UAH.
        </TotalAmoundMin>
      </Container>

      <Container>
        <TextAmound>Income:</TextAmound>
        <TotalAmoundPlus>
          + {transactions?.incomes.incomeTotal} UAH.
        </TotalAmoundPlus>
      </Container>
    </FormAmount>
  );
};

export default ReportAmount;

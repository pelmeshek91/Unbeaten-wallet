import React from 'react';
import {
  FormAmount,
  TextAmound,
  TotalAmoundPlus,
  TotalAmoundMin,
} from './ReportAmount.styled';
import { useSelector } from 'react-redux';

const ReportAmount = () => {
  const { transactions } = useSelector(state => state.transactions);

  return (
    <FormAmount>
      <div>
        <TextAmound>Expenses:</TextAmound>
        <TotalAmoundMin>
          - {transactions?.expenses.expenseTotal} UAH.
        </TotalAmoundMin>
      </div>

      <div>
        <TextAmound>Income:</TextAmound>
        <TotalAmoundPlus>
          + {transactions?.incomes.incomeTotal} UAH.
        </TotalAmoundPlus>
      </div>
    </FormAmount>
  );
};

export default ReportAmount;

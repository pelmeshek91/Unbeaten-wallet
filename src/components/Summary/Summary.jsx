import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  SummaryLine,
  SummaryTable,
  SummaryTableCell,
  SummaryTableHeading,
  SummaryTableWrapper,
  SummaryWrapper,
  Thead,
} from './Summary.styled';
import {
  addTransactionExpensesThunk,
  addTransactionIncomesThunk,
} from 'redux/transcactions/transcactionsOperations';
import { translateMonth } from '../../utilits/translateMonth';

export const TransactionsSummary = () => {
  const dispatch = useDispatch();

  const transIncomes = useSelector(state => state.transactions.incomes);
  const transExpenses = useSelector(state => state.transactions.expenses);

  const [incomes, setIncomes] = useState(transIncomes);
  const [expenses, setExpenses] = useState(transExpenses);

  // console.log(expenses);

  const transactionType = 'expenses';

  useEffect(() => {
    // dispatch(addTransactionExpensesThunk());
    // dispatch(addTransactionIncomesThunk());
  }, []);

  return (
    <SummaryWrapper>
      <SummaryTable>
        <Thead>
          <tr>
            <SummaryTableHeading colSpan="2">Summary</SummaryTableHeading>
          </tr>
        </Thead>
        <SummaryTableWrapper>
          <SummaryLine style={{ height: 38 }}>
            <SummaryTableCell></SummaryTableCell>
            <SummaryTableCell></SummaryTableCell>
          </SummaryLine>
          <SummaryLine style={{ height: 38 }}>
            <SummaryTableCell></SummaryTableCell>
            <SummaryTableCell></SummaryTableCell>
          </SummaryLine>
          <SummaryLine style={{ height: 38 }}>
            <SummaryTableCell></SummaryTableCell>
            <SummaryTableCell></SummaryTableCell>
          </SummaryLine>
          <SummaryLine style={{ height: 38 }}>
            <SummaryTableCell></SummaryTableCell>
            <SummaryTableCell></SummaryTableCell>
          </SummaryLine>
          <SummaryLine style={{ height: 38 }}>
            <SummaryTableCell></SummaryTableCell>
            <SummaryTableCell></SummaryTableCell>
          </SummaryLine>
          <SummaryLine style={{ height: 38 }}>
            <SummaryTableCell></SummaryTableCell>
            <SummaryTableCell></SummaryTableCell>
          </SummaryLine>
        </SummaryTableWrapper>
      </SummaryTable>
    </SummaryWrapper>
  );
};

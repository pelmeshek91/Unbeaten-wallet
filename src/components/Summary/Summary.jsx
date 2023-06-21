import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
  getTransactionsExpensesThunk,
  getTransactionsIncomeThunk,
} from '../../redux/transcactions/transcactionsOperations';
// import { translateMonth } from '../../utilits/translateMonth';

export const TransactionsSummary = () => {
  // const dispatch = useDispatch();

  // const transIncomes = useSelector(state => state.transactions.incomes);
  // const transExpenses = useSelector(state => state.transactions.expenses);

  // const [incomes, setIncomes] = useState(transIncomes);
  // const [expenses, setExpenses] = useState(transExpenses);

  // // console.log(expenses);

  const transactionType = 'expenses';

  // useEffect(() => {
  //   // dispatch(addTransactionExpensesThunk());
  //   // dispatch(addTransactionIncomesThunk());
  // }, []);

  //  дані зі стору
  const monthExpenses = useSelector(
    state => state.transactions.monthStatsExpenses
  );

  // console.log(monthExpenses);
  const monthIncome = useSelector(state => state.transactions.monthStatsIncome);
  // console.log(monthIncome);
  const transactionIncomes = useSelector(state => state.transactions.incomes);
  const transactionExpenses = useSelector(state => state.transactions.expenses);

  // // вибираємо значення залежно від типу транзакції
  const select = transactionType === 'expenses' ? monthExpenses : monthIncome;
  // console.log(monthExpenses);

  // // перетворюємо в об'єкт
  const sumValues = Object.values(select);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsExpensesThunk());
  }, [dispatch]);
  // console.log(monthExpenses);

  // // робимо запит в залежності від типу трансакції
  useEffect(() => {
    transactionType === 'expenses'
      ? monthExpenses.length === 0 && dispatch(getTransactionsExpensesThunk())
      : monthIncome.length === 0 && dispatch(getTransactionsIncomeThunk());
  }, [
    dispatch,
    transactionType,
    transactionIncomes,
    transactionExpenses,
    monthExpenses,
    monthIncome,
  ]);

  // // містить індекс теперішнього місяця

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  // // console.log(currentMonth);

  const monthesArray = [
    'December',
    'November',
    'October',
    'September',
    'August',
    'July',
    'June',
    'May',
    'April',
    'March',
    'February',
    'January',
  ];

  return (
    <SummaryWrapper>
      <SummaryTable>
        <Thead>
          <tr>
            <SummaryTableHeading colSpan="2">Summary</SummaryTableHeading>
          </tr>
        </Thead>
        <SummaryTableWrapper>
          {sumValues.map((sum, index) => {
            if (index >= currentMonth) {
              if (sum === 'N/A') {
                sum = 0;
              }
              return (
                <SummaryLine key={monthesArray[index]}>
                  <SummaryTableCell>{monthesArray[index]}</SummaryTableCell>
                  <SummaryTableCell>{sum}</SummaryTableCell>
                </SummaryLine>
              );
            }
            return null;
          })}
          {/* <SummaryLine style={{ height: 38 }}>
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
          </SummaryLine> */}
        </SummaryTableWrapper>
      </SummaryTable>
    </SummaryWrapper>
  );
};

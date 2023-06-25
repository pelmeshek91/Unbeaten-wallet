import { useSelector } from 'react-redux';

import {
  SummaryLine,
  SummaryTable,
  SummaryTableCell,
  SummaryTableHeading,
  SummaryTableWrapper,
  SummaryWrapper,
  Thead,
} from './Summary.styled';

import { useParams } from 'react-router';
// import { translateMonth } from '../../utilits/translateMonth';

export const TransactionsSummary = () => {
  const { expenses: key } = useParams();
  const monthExpenses = useSelector(
    state => state.transactions.monthStatsExpenses
  );
  const monthIncome = useSelector(state => state.transactions.monthStatsIncome);
  const select = key === 'expenses' ? monthExpenses : monthIncome;

  const sumValues = Object.values(select);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const monthesArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const valueArr = sumValues.map((sum, index) => {
    if (sum === 'N/A') {
      return (sum = 0);
    } else {
      return sum;
    }
  });

  const newArr = valueArr.splice(0, currentMonth).reverse();

  return (
    <SummaryWrapper>
      <SummaryTable>
        <Thead>
          <tr>
            <SummaryTableHeading colSpan="2">Summary</SummaryTableHeading>
          </tr>
        </Thead>
        <SummaryTableWrapper>
          {newArr.map((sum, index) => (
            <SummaryLine key={monthesArray[newArr.length - index - 1]}>
              <SummaryTableCell>
                {monthesArray[newArr.length - index - 1]}
              </SummaryTableCell>
              <SummaryTableCell>{sum}</SummaryTableCell>
            </SummaryLine>
          ))}
        </SummaryTableWrapper>
      </SummaryTable>
    </SummaryWrapper>
  );
};

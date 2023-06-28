import { TransactionForm } from 'components/Form/Form';
import { ContainerFormDate, Div } from './TransactionsContainer.styled';
import { TransactionsSummary } from 'components/Summary/Summary';
import { Table } from 'components/Table/Table';

import { useMediaQuery } from 'react-responsive';
import { device } from 'utilits/mediaQuery';

import { useSelector } from 'react-redux';

import Calendar from 'components/Date/Date';

export function TransactionsContainer() {
  const date = useSelector(state => state.transactions.date);
  const currentDate = date.toISOString().split('T')[0];

  const isTable = useMediaQuery({
    query: `(${device.tablet})`,
  });
  const isDesktop = useMediaQuery({
    query: `(${device.desktop})`,
  });

  return (
    <Div>
      {(isTable || isDesktop) && <Calendar />}
      <ContainerFormDate>
        {(isTable || isDesktop) && (
          <TransactionForm currentDate={currentDate} />
        )}
      </ContainerFormDate>

      <Table currentDate={currentDate} />
      <TransactionsSummary />
    </Div>
  );
}

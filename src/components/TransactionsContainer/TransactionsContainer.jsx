import { TransactionForm } from 'components/Form/Form';
import { ContainerFormDate, Div } from './TransactionsContainer.styled';
import { TransactionsSummary } from 'components/Summary/Summary';
import { TransactionDate } from 'components/Date/Date';
import { Table } from 'components/Table/Table';
export function TransactionsContainer() {
  return (
    <Div>
      <ContainerFormDate>
        <TransactionDate />
        <TransactionForm />
      </ContainerFormDate>

      <Table />
      <TransactionsSummary />
    </Div>
  );
}

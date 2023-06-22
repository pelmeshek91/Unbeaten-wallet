import { TransactionForm } from 'components/Form/Form';
import { ContainerFormDate, Div } from './TransactionsContainer.styled';
import { TransactionsSummary } from 'components/Summary/Summary';
import { Table } from 'components/Table/Table';

export function TransactionsContainer() {
  return (
    <Div>
      <ContainerFormDate>
        <TransactionForm />
      </ContainerFormDate>

      <Table />
      <TransactionsSummary />
    </Div>
  );
}

import { TransactionForm } from 'components/Form/Form';
import { Div } from './TransactionsContainer.styled';
import { TransactionsSummary } from 'components/Summary/Summary';
import { TransactionDate } from 'components/Date/Date';

export function TransactionsContainer() {
  return (
    <Div>
      <TransactionDate />
      <TransactionForm />
      <TransactionsSummary />
    </Div>
  );
}

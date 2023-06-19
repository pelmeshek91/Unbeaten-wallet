import TotalBalance from 'components/TotalBalance/TotalBalance';
import TransactionsExpenses from 'components/TransactionsExpenses/TransactionsExpenses';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <TotalBalance />
      <div>
        <NavLink to="/">EXPENSES</NavLink>
        <NavLink to="transactions-income">INCOME</NavLink>
      </div>
      <TransactionsExpenses />
    </>
  );
};

export default HomePage;

import TotalBalance from 'components/TotalBalance/TotalBalance';
import { NavLink } from 'react-router-dom';

const TransactionsIncome = () => {
  return (
    <div>
      <TotalBalance />
      <div>
        <NavLink to="/">EXPENSES</NavLink>
        <NavLink to="/transactions-income">INCOME</NavLink>
      </div>
      <h1>transactions</h1>
    </div>
  );
};

export default TransactionsIncome;

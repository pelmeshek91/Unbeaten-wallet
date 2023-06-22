import { TransactionsContainer } from 'components/TransactionsContainer/TransactionsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getTransactionsExpensesThunk,
  getTransactionsIncomeThunk,
  getUserInfoThunk,
} from 'redux/transcactions/transcactionsOperations';

const TransactionsExpenses = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  const { expenses: key } = useParams();
  const { balance } = useSelector(state => state.transactions);
  useEffect(() => {
    key === 'expenses' && isLogin && dispatch(getTransactionsExpensesThunk());
  }, [balance, key, dispatch, isLogin]);

  useEffect(() => {
    key === 'incomes' && isLogin && dispatch(getTransactionsIncomeThunk());
  }, [balance, key, dispatch, isLogin]);

  return <TransactionsContainer />;
};

export default TransactionsExpenses;

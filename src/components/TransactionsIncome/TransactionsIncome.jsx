import { TransactionsContainer } from 'components/TransactionsContainer/TransactionsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTransactionsIncomeThunk } from 'redux/transcactions/transcactionsOperations';

const TransactionsIncome = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  const { balance } = useSelector(state => state.transactions);
  const { expenses: key } = useParams();
  console.log(3333);
  useEffect(() => {
    key === 'incomes' && dispatch(getTransactionsIncomeThunk());
  }, [balance, key, isLogin, dispatch]);

  return <TransactionsContainer />;
  // return (
  //   <>
  //     <div>
  //       <button onClick={() => dispatch(loginUserThunk())}>LOGIN</button>
  //       <button
  //         onClick={
  //           () => dispatch(getTransactionsReportsThunk('2023-07'))
  //           // dispatch(getTransactionsExpensesThunk())
  //           // getUserInfo()
  //         }
  //       >
  //         GET
  //       </button>
  //       <button
  //         onClick={
  //           () =>
  //             // dispatch(refreshUserThunk({ sid, refresh }))
  //             // dispatch(
  //             //   addTransactionExpensesThunk({
  //             //     description: 'Expense description',
  //             //     amount: 100,
  //             //     date: '2020-12-31',
  //             //     category: 'Продукты',
  //             //   })
  //             // )
  //             dispatch(
  //               updateUserBalanceThunk({
  //                 newBalance: 999,
  //               })
  //             )
  //           // updateUserBalance({
  //           //   newBalance: 333,
  //           // })
  //         }
  //       >
  //         PUSH
  //       </button>

  //       <h1>transactions</h1>
  //     </div>
  //   </>
  // );
};

export default TransactionsIncome;

import useBalance from '../../hooks/balance/useBalance';
import { useCallback, useEffect, useState } from 'react';
import {
  addTransactionIncomesThunk, getUserInfoThunk,
  updateUserBalanceThunk,
} from '../../redux/transcactions/transcactionsOperations';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { NotificationManager } from 'react-notifications';
import { toast } from 'react-toastify';
import { useSelect } from '@mui/base';

const TotalBalance = () => {
  const dispatch = useDispatch();
  const [newTopUp, setNewTopUp] = useState('');
  const [balanceUpdated, setBalanceUpdated] = useState(false);

  const isLogin = useSelector(state => state.auth.isLogin);
  const balanceIsLoading = useSelector(state => state.transactions.isLoading, shallowEqual);
  const balance = useSelector(state => state.transactions.balance);

  useEffect(() => {
    if (isLogin && !balanceIsLoading && !balanceUpdated) {
      setBalanceUpdated(true);
      dispatch(getUserInfoThunk());
    }
  }, []);

  const makeTopUp = useCallback(async () => {
    if (!newTopUp || newTopUp === '') {
      toast.error('please input amount');
      return;
    }
    try {
      dispatch(updateUserBalanceThunk({ newBalance: newTopUp })).then(data => {
        if (data.error) {
          toast.error(data.error.message ?? 'server error');
          return;
        }
        toast.success('your balance updated');
      });
    } catch (e) {
      toast.error(e.message);
    }
  }, [newTopUp]);

  return (
    <div>
      <div>
        <p>Balance block</p>
        <p>
          <strong>UR balance {balance}</strong>
        </p>
      </div>
      {+balance === 0 ? (
        <div>
          <h5>
            Hello! To get started, enter the current balance of your account!
          </h5>
          <div>
            <input
              placeholder='amount'
              onChange={e => setNewTopUp(e.target.value)}
              type='number'
            />
          </div>
          <button onClick={makeTopUp} className='btn'>
            topup
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TotalBalance;

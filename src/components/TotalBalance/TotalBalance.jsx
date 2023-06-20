import useBalance from '../../hooks/balance/useBalance';
import { useCallback, useState } from 'react';
import {
  addTransactionIncomesThunk,
  updateUserBalanceThunk,
} from '../../redux/transcactions/transcactionsOperations';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { NotificationManager } from 'react-notifications';
import { toast } from 'react-toastify';

const TotalBalance = () => {
  const dispatch = useDispatch();
  const [newTopUp, setNewTopUp] = useState('');
  const { balance } = useBalance();

  const makeTopUp = useCallback(async () => {
    if (!newTopUp || newTopUp === '') {
      toast.error('please input amount');
      return;
    }
    try {
      dispatch(
        updateUserBalanceThunk({ newBalance: newTopUp }),
      ).then(data => {
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

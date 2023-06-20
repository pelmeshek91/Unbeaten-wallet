import useBalance from '../../hooks/balance/useBalance';
import { useCallback, useState } from 'react';
import {
  addTransactionIncomesThunk,
  updateUserBalanceThunk,
} from '../../redux/transcactions/transcactionsOperations';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { NotificationManager } from 'react-notifications';

const TotalBalance = () => {
  const dispatch = useDispatch();
  const [newTopUp, setNewTopUp] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const { balance } = useBalance();

  const makeTopUp = useCallback(async () => {
    if (!newTopUp || newTopUp === '') {
      console.log('no input data');
      return;
    }
    try {
      dispatch(
        addTransactionIncomesThunk({
          description: newDescription,
          amount: newTopUp,
          date: moment().format('YYYY-MM-DD'),
          category: 'new category',
        })
      ).then(data => {
        if (data.error) {
          NotificationManager.warning(
            data.error.message ?? 'server error',
            'Error message'
          );
          return;
        }
        dispatch(updateUserBalanceThunk());
        NotificationManager.success('your balance updated', 'Success message');
      });
    } catch (e) {
      console.log(e);
    }
  }, [newTopUp, newDescription]);

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
              placeholder="description of income"
              onChange={e => setNewDescription(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="amount"
              onChange={e => setNewTopUp(e.target.value)}
              type="number"
            />
          </div>
          <button onClick={makeTopUp} className="btn">
            topup
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TotalBalance;

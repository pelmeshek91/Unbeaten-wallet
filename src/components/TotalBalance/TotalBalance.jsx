import useBalance from '../../hooks/balance/useBalance';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import {
  getUserInfoThunk,
  updateUserBalanceThunk,
} from '../../redux/transcactions/transcactionsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const TotalBalance = () => {
  const dispatch = useDispatch();
  const [newTopUp, setNewTopUp] = useState('');
  const [balanceUpdated, setBalanceUpdated] = useState(false);

  const isLogin = useSelector(state => state.auth.isLogin);
  const { balanceIsLoading, balance } = useSelector(
    state => state.transactions
  );

  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, [balance, dispatch]);

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
        <p>UR balance {balance}</p>
      </div>
      {+balance === 0 ? (
        <div>
          <h5>
            Hello! To get started, enter the current balance of your account!
          </h5>
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

import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import {
  getUserInfoThunk,
  updateUserBalanceThunk,
} from '../../redux/transcactions/transcactionsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { Tooltip } from 'react-tooltip';

const TotalBalance = () => {
  const dispatch = useDispatch();
  const [newTopUp, setNewTopUp] = useState('');
  const [balanceUpdated, setBalanceUpdated] = useState(false);

  const isLogin = useSelector(state => state.auth.isLogin);
  const { isLoading, balance } = useSelector(state => state.transactions);

  useEffect(() => {
    dispatch(getUserInfoThunk()).then(() => {
      setBalanceUpdated(true);
    });
  }, [balance, dispatch]);

  const makeTopUp = useCallback(async () => {
    if (!newTopUp || newTopUp === '') {
      toast.error('please input amount');
      return;
    }
    dispatch(updateUserBalanceThunk({ newBalance: newTopUp })).then(data => {
      if (data.error) {
        toast.error(data.error.message ?? 'server error');
        return;
      }
      toast.success('your balance updated');
    });
  }, [newTopUp]);

  return (
    <div>
      {isLogin && balanceUpdated && !isLoading ? (
        <div>
          <div>
            <p>UR balance {balance}</p>
          </div>
          {balanceUpdated && +balance === 0 ? (
            <div>
              <div className="flex">
                <div>
                  <input
                    data-tooltip-place="bottom"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Hello! To get started, enter the current balance of your account!"
                    placeholder="amount"
                    onChange={e => setNewTopUp(e.target.value)}
                    type="number"
                  />
                  <Tooltip
                    className="tool-tip-my"
                    id="my-tooltip"
                    isOpen={true}
                  />
                </div>
                <button onClick={makeTopUp} className="btn">
                  topup
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <PulseLoader color="#383847" />
      )}
    </div>
  );
};

export default TotalBalance;

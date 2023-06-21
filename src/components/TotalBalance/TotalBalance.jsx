import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { Tooltip } from 'react-tooltip';
import {
  BalanceContainer,
  BalanceLabel,
  BalanceValue,
  Button,
  Input,
  InputContainer,
  LoaderContainer,
} from './TotalBalance.styled';
import {
  getUserInfoThunk,
  updateUserBalanceThunk,
} from '../../redux/transcactions/transcactionsOperations';

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
    <BalanceContainer>
      {isLogin && balanceUpdated && !isLoading ? (
        <>
          <BalanceLabel>Balance:</BalanceLabel>
          {isLogin && +balance !== 0 ? (
            <BalanceValue>{balance}</BalanceValue>
          ) : null}
          {balanceUpdated && +balance === 0 ? (
            <InputContainer>
              <Input
                data-tooltip-place="bottom"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Hello! To get started, enter the current balance of your account! You can't spend money until you have it :)"
                placeholder="00.00 UAH"
                onChange={e => setNewTopUp(e.target.value)}
                onKeyPress={e => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                suffix="UAH"
              />
              <Tooltip
                className="tool-tip-my"
                id="my-tooltip"
                isOpen={true}
                style={{
                  width: 268,
                  height: 145,
                  backgroundColor: '#60C470',
                  borderRadius: 30,
                }}
              />
              <Button onClick={makeTopUp}>Confirm</Button>
            </InputContainer>
          ) : null}
        </>
      ) : (
        <></>
        // <LoaderContainer>
        //   <PulseLoader color="#383847" />
        // </LoaderContainer>
      )}
    </BalanceContainer>
  );
};

export default TotalBalance;

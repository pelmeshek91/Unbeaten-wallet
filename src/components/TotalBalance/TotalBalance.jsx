import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import {
  BalanceContainer,
  BalanceLabel,
  BalanceValue,
  Button,
  Input,
  InputContainer,
  LoaderContainer,
  StyledMessage,
} from './TotalBalance.styled';
import {
  getUserInfoThunk,
  updateUserBalanceThunk,
} from '../../redux/transcactions/transcactionsOperations';

const TotalBalance = () => {
  const dispatch = useDispatch();
  const [newTopUp, setNewTopUp] = useState('');
  const [balanceUpdated, setBalanceUpdated] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const isLogin = useSelector(state => state.auth.isLogin);
  const { isLoading, balance } = useSelector(state => state.transactions);

  useEffect(() => {
    dispatch(getUserInfoThunk()).then(() => {
      setBalanceUpdated(true);
      setPageLoading(false);
    });
  }, [dispatch]);

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
      setNewTopUp('');
      setBalanceUpdated(false);
    });
  }, [dispatch, newTopUp]);

  useEffect(() => {
    if (!isLoading) {
      setBalanceUpdated(true);
    }
  }, [isLoading]);

  return (
    <BalanceContainer>
      {isLogin && !pageLoading && balanceUpdated ? (
        <>
          <BalanceLabel>Balance:</BalanceLabel>
          {isLogin && +balance !== 0 ? (
            <BalanceValue>{balance} :UAH</BalanceValue>
          ) : null}
          {balanceUpdated && +balance === 0 ? (
            <InputContainer>
              <div style={{ position: 'relative' }}>
                <Input
                  placeholder="00.00 UAH"
                  value={newTopUp}
                  onChange={e => setNewTopUp(e.target.value)}
                  onKeyPress={e => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  suffix="UAH"
                />
                {balanceUpdated && +balance === 0 && (
                  <StyledMessage>
                    <p>
                      Hello! To get started, enter the current balance of your
                      account!
                    </p>
                    <p>You can't spend money until you have it :)</p>
                  </StyledMessage>
                )}
              </div>
              {balanceUpdated && +balance === 0 && (
                <Button onClick={makeTopUp}>Confirm</Button>
              )}
            </InputContainer>
          ) : null}
        </>
      ) : (
        <LoaderContainer>
          {isLoading || pageLoading ? <PulseLoader color="#383847" /> : null}
        </LoaderContainer>
      )}
    </BalanceContainer>
  );
};

export default TotalBalance;

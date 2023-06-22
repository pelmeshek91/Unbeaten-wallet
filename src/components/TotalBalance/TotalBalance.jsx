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
  RelativeContainer,
} from './TotalBalance.styled';
import { updateUserBalanceThunk } from '../../redux/transcactions/transcactionsOperations';

const TotalBalance = () => {
  const dispatch = useDispatch();
  const [newTopUp, setNewTopUp] = useState('');
  const isLogin = useSelector(state => state.auth.isLogin);
  const { isLoading, balance } = useSelector(state => state.transactions);

  const makeTopUp = useCallback(async () => {
    if (!newTopUp || newTopUp === '') {
      toast.error('Please input an amount');
      return;
    }
    dispatch(updateUserBalanceThunk({ newBalance: newTopUp })).then(data => {
      if (data.error) {
        toast.error(data.error.message ?? 'Server error');
        return;
      }
      toast.success('Your balance has been updated');
      setNewTopUp('');
    });
  }, [dispatch, newTopUp]);

  return (
    <BalanceContainer>
      {isLogin ? (
        <>
          <BalanceLabel>Balance:</BalanceLabel>
          {+balance !== 0 ? (
            <BalanceValue>{balance}</BalanceValue>
          ) : (
            <InputContainer>
              <RelativeContainer>
                <Input
                  placeholder="00.00"
                  value={newTopUp}
                  onChange={e => setNewTopUp(e.target.value)}
                  onKeyPress={e => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  suffix="UAH"
                />
                {+balance === 0 && (
                  <StyledMessage>
                    <p>
                      Hello! To get started, enter the current balance of your
                      account!
                    </p>
                    <p>You can't spend money until you have it :)</p>
                  </StyledMessage>
                )}
              </RelativeContainer>
              {+balance === 0 && <Button onClick={makeTopUp}>Confirm</Button>}
            </InputContainer>
          )}
        </>
      ) : (
        <LoaderContainer>
          {isLoading ? <PulseLoader color="#383847" /> : null}
        </LoaderContainer>
      )}
    </BalanceContainer>
  );
};

export default TotalBalance;

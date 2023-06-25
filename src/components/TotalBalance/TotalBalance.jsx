import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  BalanceContainer,
  BalanceLabel,
  BalanceValue,
  Button,
  Input,
  InputContainer,
  StyledMessage,
  RelativeContainer,
  ButtonDisabled,
  Wrapper,
} from './TotalBalance.styled';
import { updateUserBalanceThunk } from '../../redux/transcactions/transcactionsOperations';

const TotalBalance = () => {
  const dispatch = useDispatch();
  const [newTopUp, setNewTopUp] = useState('');
  const { balance, expenses } = useSelector(state => state.transactions);

  const makeTopUp = useCallback(async () => {
    if (newTopUp === '') {
      toast.error('Please input an amount');
      return;
    }
    dispatch(updateUserBalanceThunk({ newBalance: newTopUp }))
      .unwrap()
      .then(data => {
        toast.success('Your balance has been updated');
        setNewTopUp('');
      })
      .catch(error => toast.error(error.message));
  }, [dispatch, newTopUp]);

  return (
    <BalanceContainer>
      <>
        <BalanceLabel>Balance:</BalanceLabel>
        {balance || expenses.length > 0 ? (
          <>
            <Wrapper>
              <BalanceValue>{balance}</BalanceValue>
              <ButtonDisabled disabled>Confirm</ButtonDisabled>
            </Wrapper>
          </>
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

              <StyledMessage>
                <div>
                  <p>
                    Hello! To get started, enter the current balance of your
                    account!
                  </p>
                  <p>You can't spend money until you have it :)</p>
                </div>
              </StyledMessage>
            </RelativeContainer>
            <Button onClick={makeTopUp}>Confirm</Button>
          </InputContainer>
        )}
      </>
    </BalanceContainer>
  );
};

export default TotalBalance;

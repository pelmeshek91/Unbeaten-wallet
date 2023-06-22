import { useDispatch, useSelector } from 'react-redux';
import {
  Div,
  TableEL,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TrashBtn,
} from './Table.styled';
import { nanoid } from '@reduxjs/toolkit';
import { BsTrash3 } from 'react-icons/bs';
import {
  deleteTransactionThunk,
  getTransactionsExpensesThunk,
  getTransactionsIncomeThunk,
} from 'redux/transcactions/transcactionsOperations';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import { getTransactionsIncomes } from 'services/walletApi';

const tableDefaultArray = Array(9).fill(null);

export function Table() {
  // useEffect(() => {
  //   dispatch(getTransactionsExpensesThunk());
  // }, [ dispatch]);
  const dispatch = useDispatch();
  // const balance = useSelector(state => state.transactions.balance);
  const { expenses: key } = useParams();
  const transactions = useSelector(state => state.transactions[key]);
  // console.log(key);
  // useEffect(() => {
  //   key === 'incomes' && getTransactionsIncomes();
  // }, [balance, key]);
  const arr = useMemo(() => {
    return transactions.length > tableDefaultArray.length
      ? transactions
      : transactions.concat(
          Array(tableDefaultArray.length - transactions.length).fill({
            description: '',
            amount: '',
            date: '',
            category: '',
            _id: '',
          })
        );
  }, [transactions]);
  return (
    <Div>
      <TableEL>
        <Thead>
          <Tr>
            <Th>DATE</Th>
            <Th>DESCRIPTION</Th>
            <Th>CATEGORY</Th>
            <Th>SUM</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {arr.map(row => {
            return (
              <Tr key={nanoid()}>
                <Td>{row.date}</Td>
                <Td>{row.description}</Td>
                <Td>{row.category}</Td>
                {key === 'expenses' && row.amount ? (
                  <Td style={{ color: 'red' }}>-{row.amount}</Td>
                ) : (
                  <Td style={{ color: 'green' }}>{row.amount}</Td>
                )}

                <Td>
                  {row._id && (
                    <TrashBtn
                      onClick={() => dispatch(deleteTransactionThunk(row._id))}
                    >
                      <BsTrash3
                        style={{
                          fill: 'white',
                        }}
                      />
                    </TrashBtn>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </TableEL>
    </Div>
  );
}

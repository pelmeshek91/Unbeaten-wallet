import { useDispatch, useSelector } from 'react-redux';
import {
  Div,
  HeaderContainer,
  PCateg,
  PDate,
  PDescr,
  PSum,
  TableCell,
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
} from 'redux/transcactions/transcactionsOperations';
import { useEffect, useMemo } from 'react';

const tableDefaultArray = Array(9).fill(null);

export function Table() {
  const dispatch = useDispatch();
  const { expenses } = useSelector(state => state.transactions);
  const { balance } = useSelector(state => state.transactions);
  useEffect(() => {
    dispatch(getTransactionsExpensesThunk());
  }, [balance, dispatch]);

  const arr = useMemo(() => {
    return expenses.length > tableDefaultArray.length
      ? expenses
      : expenses.concat(
          Array(tableDefaultArray.length - expenses.length).fill({
            description: '',
            amount: '',
            date: '',
            category: '',
            _id: '',
          })
        );
  }, [expenses]);
  return (
    <Div>
      <TableEL>
        <HeaderContainer>
          <PDate>DATE</PDate>
          <PDescr>DESCRIPTION</PDescr>
          <PCateg>CATEGORY</PCateg>
          <PSum>SUM</PSum>
        </HeaderContainer>
        {/* <Thead>
          <Tr>
            <Th>DATE</Th>
            <Th>DESCRIPTION</Th>
            <Th>CATEGORY</Th>
            <Th>SUM</Th>
            <Th></Th>
          </Tr>
        </Thead> */}
        <Tbody>
          {arr.map(row => {
            return (
              <Tr key={nanoid()}>
                <Td>{row.date}</Td>
                <Td>{row.description}</Td>
                <Td>{row.category}</Td>
                <Td>{row.amount}</Td>
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

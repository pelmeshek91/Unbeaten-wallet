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
import { deleteTransactionThunk } from 'redux/transcactions/transcactionsOperations';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { translateCategory } from '../../utilits/translateCategory';
import ModalApproval from 'components/ModalsWindow/ModalApproval';

const tableDefaultArray = Array(9).fill(null);

export function Table() {
  const dispatch = useDispatch();
  const [transactionId, setTransactionId] = useState('');

  const { expenses: key } = useParams();
  const transactions = useSelector(state => state.transactions[key]);

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

  const closeModal = () => {
    setTransactionId('');
  };
  const deleteTransaction = () => {
    dispatch(deleteTransactionThunk(transactionId))
      .unwrap()
      .then(() => setTransactionId(''));
  };
  console.log(transactionId);

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
                <Td>{translateCategory(row.category)}</Td>
                {key === 'expenses' && row.amount ? (
                  <Td style={{ color: 'red' }}>-{row.amount}</Td>
                ) : (
                  <Td style={{ color: 'green' }}>{row.amount}</Td>
                )}

                <Td>
                  {row._id && (
                    <TrashBtn onClick={() => setTransactionId(row._id)}>
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
      {transactionId && (
        <ModalApproval
          closeModal={closeModal}
          confirmAction={deleteTransaction}
          title={'Are you sure?'}
        />
      )}
    </Div>
  );
}

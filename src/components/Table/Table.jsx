import { useDispatch, useSelector } from 'react-redux';
import {
  Div,
  DivchykFlex,
  Lishka,
  PeshkaBig,
  PeshkaBtn,
  PeshkaLitl,
  Section,
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
import { useMediaQuery } from 'react-responsive';

const tableDefaultArray = Array(8).fill(null);

export function Table({ currentDate }) {
  const dispatch = useDispatch();
  const [transactionId, setTransactionId] = useState('');

  const { expenses: key } = useParams();
  const transactions = useSelector(state => state.transactions[key]);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const filteredTransactions = transactions.filter(
    ({ date }) => date === currentDate
  );

  const arr = useMemo(() => {
    return filteredTransactions.length > tableDefaultArray.length
      ? filteredTransactions
      : filteredTransactions.concat(
          Array(tableDefaultArray.length - filteredTransactions.length).fill({
            description: '',
            amount: '',
            date: '',
            category: '',
            _id: '',
          })
        );
  }, [filteredTransactions]);

  const closeModal = () => {
    setTransactionId('');
  };
  const deleteTransaction = () => {
    dispatch(deleteTransactionThunk(transactionId))
      .unwrap()
      .then(() => setTransactionId(''));
  };

  return !isMobile ? (
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
                  <Td style={{ color: 'red' }}>-{row.amount} </Td>
                ) : (
                  <Td style={{ color: 'green' }}>{row.amount} </Td>
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
  ) : (
    <Section>
      {filteredTransactions.map(row => {
        return (
          <ul key={nanoid()}>
            <Lishka>
              <div>
                <PeshkaBig>{row.description}</PeshkaBig>
                <DivchykFlex>
                  <PeshkaLitl>{row.date}</PeshkaLitl>
                  <PeshkaLitl>{translateCategory(row.category)}</PeshkaLitl>
                </DivchykFlex>
              </div>
              <DivchykFlex>
                {key === 'expenses' && row.amount ? (
                  <p style={{ color: 'red' }}>-{row.amount}</p>
                ) : (
                  <p style={{ color: 'green' }}>{row.amount}</p>
                )}

                <PeshkaBtn>
                  {row._id && (
                    <TrashBtn onClick={() => setTransactionId(row._id)}>
                      <BsTrash3
                        style={{
                          fill: 'white',
                        }}
                      />
                    </TrashBtn>
                  )}
                </PeshkaBtn>
              </DivchykFlex>
            </Lishka>
          </ul>
        );
      })}

      {transactionId && (
        <ModalApproval
          closeModal={closeModal}
          confirmAction={deleteTransaction}
          title={'Are you sure?'}
        />
      )}
    </Section>
  );
}

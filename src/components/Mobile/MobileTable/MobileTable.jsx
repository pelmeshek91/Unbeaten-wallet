import { useDispatch, useSelector } from 'react-redux';
import {
    Lishka,
    DivchykFlex,
    TrashBtn,
    PeshkaLitl,
    PeshkaBig,
    PeshkaBtn,
    Section,
} from './MobileTablet.styled';
import { nanoid } from '@reduxjs/toolkit';
import { BsTrash3 } from 'react-icons/bs';
import { deleteTransactionThunk } from 'redux/transcactions/transcactionsOperations';
import {  useState } from 'react';
import { useParams } from 'react-router';
import { translateCategory } from 'utilits/translateCategory';
import ModalApproval from 'components/ModalsWindow/ModalApproval';


export function MobileTable({ currrentDate }) {
  const dispatch = useDispatch();
  const [transactionId, setTransactionId] = useState('');

  const { expenses: key } = useParams();
  const transactions = useSelector(state => state.transactions[key]);

  const filteredTransactions = transactions.filter(
    ({ date }) => date === currrentDate
  );

  
const closeModal = () => {
    setTransactionId('');
  };
  const deleteTransaction = () => {
    dispatch(deleteTransactionThunk(transactionId))
      .unwrap()
      .then(() => setTransactionId(''));
  };

  return (
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

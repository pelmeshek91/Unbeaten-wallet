import 'react-datepicker/dist/react-datepicker.css';

import { CiCircleChevLeft } from 'react-icons/ci';
import Header from '../../Header/Header';
import { ButtonTx, Overlay } from './MobileFormTransactions.styled';
import './mobile.css';

import { TransactionForm } from 'components/Form/Form';

export const MobileFormTransactions = ({ currentDate, onClose }) => {
  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <Header />

      <ButtonTx onClick={onClose}>
        <CiCircleChevLeft
          style={{
            width: '30px',
            height: '30px',
            fill: '#C7CCDC',
          }}
        />
        To transaction
      </ButtonTx>
      <TransactionForm currentDate={currentDate} />
    </Overlay>
  );
};

export default MobileFormTransactions;

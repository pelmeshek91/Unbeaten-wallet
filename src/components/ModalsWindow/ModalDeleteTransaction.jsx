import {
  Question,
  ModalContainer,
  BtnContainer,
  YesBtn,
  NoBtn,
} from './ModalExite.styled';
import { GrClose } from 'react-icons/gr';

const ModalDeleteTransaction = () => {
  return (
    <ModalContainer>
      <GrClose />
      <Question>Are you sure?</Question>
      <BtnContainer>
        <YesBtn>Yes</YesBtn>
        <NoBtn>No</NoBtn>
      </BtnContainer>
    </ModalContainer>
  );
};

export default ModalDeleteTransaction;

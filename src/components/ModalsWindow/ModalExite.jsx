import {
  Question,
  ModalContainer,
  BtnContainer,
  YesBtn,
  NoBtn,
} from './ModalExite.styled';
import { GrClose } from 'react-icons/gr';

const ModalExite = () => {
  return (
    <ModalContainer>
      <GrClose />
      <Question>Do you really want to leave?</Question>
      <BtnContainer>
        <YesBtn>Yes</YesBtn>
        <NoBtn>No</NoBtn>
      </BtnContainer>
    </ModalContainer>
  );
};

export default ModalExite;

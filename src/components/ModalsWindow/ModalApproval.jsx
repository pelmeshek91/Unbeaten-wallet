import { useEffect } from 'react';
import {
  Question,
  ModalContainer,
  BtnContainer,
  YesBtn,
  NoBtn,
  StyledExitIcon,
  Overlay,
} from './ModalApproval.styled';
// import { logoutThunk } from 'redux/auth/authOperations';
// import { useDispatch } from 'react-redux';

const ModalApproval = ({ closeModal, confirmAction, title }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEsc);

    return () => {
      document.removeEventListener('keydown', handleCloseByEsc);
    };
  });

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  const handleCloseByEsc = e => {
    if (e.code !== 'Escape') return;
    closeModal();
  };
  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <StyledExitIcon onClick={closeModal} />
        <Question>{title}</Question>
        <BtnContainer>
          <YesBtn type="button" onClick={confirmAction}>
            Yes
          </YesBtn>

          <NoBtn type="button" onClick={closeModal}>
            No
          </NoBtn>
        </BtnContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default ModalApproval;

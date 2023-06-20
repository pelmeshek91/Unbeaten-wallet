import {
  Question,
  ModalContainer,
  BtnContainer,
  YesBtn,
  NoBtn,
  StyledExitIcon,
  Overlay,
} from './ModalApproval.styled';
import { logoutThunk } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const ModalApproval = ({ active, setActive, title }) => {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    setActive(false);
  };
  return (
    <Overlay>
      <ModalContainer>
        <StyledExitIcon onClick={handleCloseClick} />
        <Question>{title}</Question>
        <BtnContainer>
          <YesBtn
            type="button"
            onClick={() => dispatch(logoutThunk(), setActive(false))}
          >
            Yes
          </YesBtn>

          <NoBtn type="button" onClick={handleCloseClick}>
            No
          </NoBtn>
        </BtnContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default ModalApproval;

import {
  Question,
  ModalContainer,
  BtnContainer,
  YesBtn,
  NoBtn,
  StyledExitIcon,
  Overlay,
} from './ModalApproval.styled';

const ModalApproval = ({ active, setActive, title }) => {
  const handleCloseClick = () => {
    setActive(false);
  };
  return (
    <Overlay>
      <ModalContainer>
        <StyledExitIcon onClick={handleCloseClick} />
        <Question>{title}</Question>
        <BtnContainer>
          <YesBtn type="button">Yes</YesBtn>
          <NoBtn type="button" onClick={handleCloseClick}>
            No
          </NoBtn>
        </BtnContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default ModalApproval;

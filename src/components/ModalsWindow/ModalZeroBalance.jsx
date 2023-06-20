import {
  TextContainer,
  InformText,
  ModalContainer,
} from './ModalZeroBalance.styled';

const ModalZeroBalance = () => {
  return (
    <ModalContainer>
      <TextContainer>
        <InformText>
          Hello! To get started, enter the current balance of your account!
        </InformText>
        <InformText>You can't spend money until you have it :)</InformText>
      </TextContainer>
    </ModalContainer>
  );
};

export default ModalZeroBalance;

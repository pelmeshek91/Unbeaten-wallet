import {
  ExiteContainer,
  UserIcon,
  FirstLetter,
  UserName,
  VerticalLine,
  ExitBtn,
  StyledExitIcon,
  SpanText,
} from './Exite.styled';

const Exite = ({ onExitClick }) => {
  const userName = 'User Name';
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleExitClick = () => {
    onExitClick();
  };
  return (
    <ExiteContainer>
      <UserIcon>
        <FirstLetter>{firstLetter}</FirstLetter>
      </UserIcon>
      <UserName>{userName}</UserName>
      <VerticalLine>|</VerticalLine>

      <ExitBtn onClick={handleExitClick} type="button">
        <SpanText>Exit</SpanText>
        <StyledExitIcon />
      </ExitBtn>
    </ExiteContainer>
  );
};

export default Exite;

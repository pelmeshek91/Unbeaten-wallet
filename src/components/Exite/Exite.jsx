import { useSelector } from 'react-redux';
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
  const { email } = useSelector(state => state.auth);
  const userName = email.split('@')[0];

  const capitalizedUsername =
    userName.charAt(0).toUpperCase() + userName.slice(1);

  const firstLetter = capitalizedUsername.charAt(0);

  const handleExitClick = () => {
    onExitClick();
  };
  return (
    <ExiteContainer>
      <UserIcon>
        <FirstLetter>{firstLetter}</FirstLetter>
      </UserIcon>
      <UserName>{capitalizedUsername}</UserName>
      <VerticalLine>|</VerticalLine>

      <ExitBtn onClick={handleExitClick} type="button">
        <SpanText>Exit</SpanText>
        <StyledExitIcon />
      </ExitBtn>
    </ExiteContainer>
  );
};

export default Exite;

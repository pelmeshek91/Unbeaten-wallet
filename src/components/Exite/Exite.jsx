import RxDividerVertical from 'react-icons/rx';
import {
  ExiteContainer,
  UserIcon,
  FirstLetter,
  UserName,
  VerticalLine,
  ExitBtn,
} from './Exite.styled';
import ModalExite from 'components/ModalsWindow/ModalExite';

const Exite = () => {
  const userName = 'User Name';
  const firstLetter = userName.charAt(0).toUpperCase();
  return (
    <ExiteContainer>
      <UserIcon>
        <FirstLetter>{firstLetter}</FirstLetter>
      </UserIcon>
      <UserName>{userName}</UserName>
      <VerticalLine>
        <RxDividerVertical />|
      </VerticalLine>
      <ExitBtn onClick={ModalExite} type="button">
        Exit
      </ExitBtn>
    </ExiteContainer>
  );
};

export default Exite;

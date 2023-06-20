import logo from '../../img/logo.png';
import { HeaderContainer, HeaderMain, Image } from './Header.styled';
// import Exite from 'components/Exite/Exite';
// import { useAuth } from 'hooks';

const Header = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <HeaderContainer>
      <HeaderMain>
        <Image src={logo} alt="logo" />
        {/* {isLoggedIn && <Exite />} */}
      </HeaderMain>
    </HeaderContainer>
  );
};

export default Header;

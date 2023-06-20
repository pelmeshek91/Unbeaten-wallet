import ModalApproval from 'components/ModalsWindow/ModalApproval';
import logo from '../../img/logo.png';
import { HeaderContainer, HeaderMain, Image } from './Header.styled';
import Exite from 'components/Exite/Exite';

import { useState } from 'react';

// import { useAuth } from 'hooks';

const Header = () => {
  //   const { isLoggedIn } = useAuth();

  const [modalActive, setModalActive] = useState(false);

  const handleExitClick = () => {
    setModalActive(true);
  };

  return (
    <HeaderContainer>
      <HeaderMain>
        <Image src={logo} alt="logo" />
        <Exite onExitClick={handleExitClick} />
      </HeaderMain>
      {modalActive && (
        <ModalApproval
          setActive={setModalActive}
          title="Do you really want to leave?"
        />
      )}
    </HeaderContainer>
  );
};

export default Header;

import ModalApproval from 'components/ModalsWindow/ModalApproval';
import logo from '../../img/logo.png';
import { HeaderContainer, HeaderMain, Image } from './Header.styled';
import Exite from 'components/Exite/Exite';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';

const Header = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.auth); //

  const [modalActive, setModalActive] = useState(false);

  const handleExitClick = () => {
    setModalActive(true);
  };
  const closeModal = () => {
    setModalActive(false);
  };
  const logOut = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => setModalActive(false));
  };

  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate('/expenses');
  };

  return (
    <HeaderContainer>
      <HeaderMain>
        <Image src={logo} alt="logo" onClick={onBtnClick} />
        {email && <Exite onExitClick={handleExitClick} />}
      </HeaderMain>
      {modalActive && (
        <ModalApproval
          closeModal={closeModal}
          confirmAction={logOut}
          title="Do you really want to leave?"
        />
      )}
    </HeaderContainer>
  );
};

export default Header;

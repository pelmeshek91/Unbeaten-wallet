import {
  Container,
  EllipseImg,
  GlobalStyle,
} from 'components/Layout/Layout.styled';
import Header from 'components/Header/Header';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ellipse from '../../img/decor-img/Ellipse-bigger.png';
import ellipseMob from '../../img/decor-img/Ellipse.png';

import { useMediaQuery } from 'react-responsive';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      <Header />

      <GlobalStyle />
      <main>
        <Container>
          {isDesktopOrLaptop && <EllipseImg src={ellipse} alt="ellipse" />}
          {isMobile && <EllipseImg src={ellipseMob} alt="ellipse" />}
          <Suspense>
            <Outlet />
          </Suspense>
          <ToastContainer />
        </Container>
      </main>
    </>
  );
};

export default Layout;

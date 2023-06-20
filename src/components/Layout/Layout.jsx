import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
        <NotificationContainer/>
      </main>
    </div>
  );
};

export default Layout;

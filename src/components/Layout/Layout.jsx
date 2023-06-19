import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';

const Layout = () => {
  return (
    <div>
      <header>HEADER</header>
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

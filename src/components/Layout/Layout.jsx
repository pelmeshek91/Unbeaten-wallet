import Header from 'components/Header/Header';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </div>
  );
};

export default Layout;

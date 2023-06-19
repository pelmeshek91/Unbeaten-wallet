import TotalBalance from 'components/TotalBalance/TotalBalance';
// import TransactionsExpenses from 'components/TransactionsExpenses/TransactionsExpenses';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <TotalBalance />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;

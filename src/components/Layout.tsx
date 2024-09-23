import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
// import Footer from './Footer/Footer';
import LoaderPuff from './UI/LoaderPuff/LoaderPuff';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<LoaderPuff />}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

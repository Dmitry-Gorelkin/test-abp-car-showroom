import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';
import { LayoutContainer, LayoutContant } from './Layout.styled';

export const Layout: FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContant>
        <Suspense fallback={<LoaderPuff />}>
          <Outlet />
        </Suspense>
      </LayoutContant>
      <Footer />
    </LayoutContainer>
  );
};

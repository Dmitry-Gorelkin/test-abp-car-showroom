import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutContainer, LayoutContant } from './Layout.styled';
import LoaderTailSpin from '../UI/LoaderTailSpin/LoaderTailSpin';

export const Layout: FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContant>
        <Suspense fallback={<LoaderTailSpin />}>
          <Outlet />
        </Suspense>
      </LayoutContant>
      <Footer />
    </LayoutContainer>
  );
};

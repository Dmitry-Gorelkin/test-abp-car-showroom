import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

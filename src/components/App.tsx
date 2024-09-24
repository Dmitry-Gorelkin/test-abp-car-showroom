import { Route, Routes } from 'react-router-dom';
import { FC, lazy } from 'react';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const CarPage = lazy(() => import('../pages/CarPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const AboutUs = lazy(() => import('../pages/AboutUs'));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vehicles/:id" element={<CarPage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;

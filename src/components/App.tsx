import { Route, Routes } from 'react-router-dom';
import { FC, lazy } from 'react';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vehicles/:id" element={<div>Page ID</div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

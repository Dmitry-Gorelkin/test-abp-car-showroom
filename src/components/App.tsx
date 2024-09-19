import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { Layout } from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

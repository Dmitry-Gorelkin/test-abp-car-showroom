import { FC } from 'react';
import { Container } from '../components/UI/Conteiner/Conteiner.styled';
import HeroMain from '../components/HeroMain/HeroMain';
import LoaderTailSpin from '../components/UI/LoaderTailSpin/LoaderTailSpin';
import CarList from '../components/CarList/CarList';

const Home: FC = () => {
  return (
    <Container>
      <HeroMain />
      <CarList />
      <LoaderTailSpin />
    </Container>
  );
};

export default Home;

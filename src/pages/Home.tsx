import { FC } from 'react';
import { Container } from '../components/UI/Conteiner/Conteiner.styled';
import HeroMain from '../components/HeroMain/HeroMain';
import LoaderTailSpin from '../components/UI/LoaderTailSpin/LoaderTailSpin';
import CarList from '../components/CarList/CarList';
import { Section } from '../components/UI/Section/Section.styled';

const Home: FC = () => {
  return (
    <Container>
      <Section>
        <HeroMain />
        <CarList />
        <LoaderTailSpin />
      </Section>
    </Container>
  );
};

export default Home;

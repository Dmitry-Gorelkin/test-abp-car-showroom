import { FC } from 'react';
import { Container } from '../components/UI/Conteiner/Conteiner.styled';
import HeroMain from '../components/HeroMain/HeroMain';
import CarsList from '../components/CarsList/CarsList';
import { Section } from '../components/UI/Section/Section.styled';

const Home: FC = () => {
  return (
    <Container>
      <Section>
        <HeroMain />
        <CarsList />
      </Section>
    </Container>
  );
};

export default Home;

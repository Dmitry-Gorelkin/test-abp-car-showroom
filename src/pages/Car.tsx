import { FC } from 'react';
import CarPage from '../components/CarPage/CarPage';
import { Container } from '../components/UI/Conteiner/Conteiner.styled';
import { Section } from '../components/UI/Section/Section.styled';

const Car: FC = () => {
  return (
    <Container>
      <Section>
        <CarPage />
      </Section>
    </Container>
  );
};

export default Car;

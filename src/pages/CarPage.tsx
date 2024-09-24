import { FC } from 'react';
import CarInfo from '../components/CarInfo/CarInfo';
import { Container } from '../components/UI/Conteiner/Conteiner.styled';
import { Section } from '../components/UI/Section/Section.styled';

const CarPage: FC = () => {
  return (
    <Container>
      <Section>
        <CarInfo />
      </Section>
    </Container>
  );
};

export default CarPage;

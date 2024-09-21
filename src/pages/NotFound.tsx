import { FC } from 'react';
import { Container } from '../components/UI/Conteiner/Conteiner.styled';
import { Section } from '../components/UI/Section/Section.styled';

export const NotFound: FC = () => {
  return (
    <Container>
      <Section>
        <h2>Page Not Found</h2>
      </Section>
    </Container>
  );
};

export default NotFound;

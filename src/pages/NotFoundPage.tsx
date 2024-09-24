import { FC } from 'react';
import { Container } from '../components/UI/Conteiner/Conteiner.styled';
import { Section } from '../components/UI/Section/Section.styled';
import NotFound from '../components/UI/NotFound/NotFound';

export const NotFoundPage: FC = () => {
  return (
    <Container>
      <Section>
        <NotFound />
      </Section>
    </Container>
  );
};

export default NotFoundPage;

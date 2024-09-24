import { FC } from 'react';
import { Container } from '../UI/Conteiner/Conteiner.styled';
import { FooterBackgroundColor, FooterContainer, FooterText } from './Footer.styled';
import { Section } from '../UI/Section/Section.styled';

const Footer: FC = () => {
  return (
    <FooterBackgroundColor>
      <Container>
        <Section>
          <FooterContainer>
            <FooterText>&copy; 2024 Auto Show</FooterText>
            <FooterText>Virtual Auto Show – your guide to the world of cars!</FooterText>
          </FooterContainer>
        </Section>
      </Container>
    </FooterBackgroundColor>
  );
};

export default Footer;

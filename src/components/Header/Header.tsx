import { FC } from 'react';
import { HeaderBackgroundColor, HeaderContainer } from './Header.styled';
import { Container } from '../UI/Conteiner/Conteiner.styled';
import { Section } from '../UI/Section/Section.styled';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header: FC = () => {
  return (
    <HeaderBackgroundColor>
      <Container>
        <Section>
          <HeaderContainer>
            <Logo to="/" />
            <Navigation />
          </HeaderContainer>
        </Section>
      </Container>
    </HeaderBackgroundColor>
  );
};

export default Header;

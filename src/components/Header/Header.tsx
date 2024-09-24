import { FC } from 'react';
import { HeaderBackgroundColor, HeaderContainer } from './Header.styled';
import { Container } from '../UI/Conteiner/Conteiner.styled';
import { Section } from '../UI/Section/Section.styled';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <HeaderBackgroundColor>
      <Container>
        <Section>
          <HeaderContainer>
            <Logo to="/" />
            <nav>
              <Link to="/">Home</Link>
              <Link to="about">About Us</Link>
            </nav>
            <p>моб меню</p>
          </HeaderContainer>
        </Section>
      </Container>
    </HeaderBackgroundColor>
  );
};

export default Header;

import { FC } from 'react';
import { HeaderBackgroundColor, HeaderContainer } from './Header.styled';
import { Container } from '../UI/Conteiner/Conteiner.styled';
import { Section } from '../UI/Section/Section.styled';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  return (
    <HeaderBackgroundColor>
      <Container>
        <Section>
          <HeaderContainer>
            <Logo to="/" />
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About Us</NavLink>
            </nav>
            <p>моб меню</p>
          </HeaderContainer>
        </Section>
      </Container>
    </HeaderBackgroundColor>
  );
};

export default Header;

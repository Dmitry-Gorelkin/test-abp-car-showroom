import { FC } from 'react';
import { HeaderBackgroundColor, HeaderContainer } from './Header.styled';
import { Container } from '../UI/Conteiner/Conteiner.styled';
import { Section } from '../UI/Section/Section.styled';

const Header: FC = () => {
  return (
    <HeaderBackgroundColor>
      <Container>
        <Section>
          <HeaderContainer>
            <h1>Лого</h1>
            <nav>навигация</nav>
            <p>моб меню</p>
          </HeaderContainer>
        </Section>
      </Container>
    </HeaderBackgroundColor>
  );
};

export default Header;

import { FC } from 'react';
import { HeaderContainer } from './Header.styled';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <h1>Лого</h1>
      <nav>навигация</nav>
      <p>моб меню</p>
    </HeaderContainer>
  );
};

export default Header;

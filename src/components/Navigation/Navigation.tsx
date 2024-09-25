import { FC } from 'react';
import { NavigationContainer, NavigationNavLink } from './Navigation.styled';

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <NavigationNavLink to="/">Home</NavigationNavLink>
      <NavigationNavLink to="about">About Us</NavigationNavLink>
    </NavigationContainer>
  );
};

export default Navigation;

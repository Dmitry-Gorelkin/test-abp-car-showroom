import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  @media screen and (min-width: 375px) {
    gap: 15px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const NavigationNavLink = styled(NavLink)`
  display: block;
  padding: 10px 0;
  position: relative;

  text-decoration: none;

  cursor: pointer;

  color: ${p => p.theme.colors.textWhite};

  &.active {
    color: ${p => p.theme.colors.accent};
  }
  &.active::after {
    width: 100%;
    left: 0;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${p => p.theme.colors.accent};
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
    left: 0;
  }
`;

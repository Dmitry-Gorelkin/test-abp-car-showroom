import styled from 'styled-components';
import { PiCarLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  text-decoration: none;

  cursor: pointer;

  transition: transform 0.3s ease;

  &:hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const LogoText = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textWhite};

  @media screen and (min-width: 425px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const LogoIcon = styled(PiCarLight)`
  width: 40px;
  height: 40px;

  fill: ${p => p.theme.colors.accent};

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

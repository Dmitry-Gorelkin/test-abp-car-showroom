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
  text-transform: uppercase;
  color: ${p => p.theme.colors.textWhite};
`;

export const LogoIcon = styled(PiCarLight)`
  width: 50px;
  height: 50px;
  fill: ${p => p.theme.colors.accent};
`;

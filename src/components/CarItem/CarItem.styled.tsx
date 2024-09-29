import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CarItemContainer = styled.li`
  display: block;

  border: 1px solid ${p => p.theme.colors.backgroundimage};

  overflow: hidden;

  transition: box-shadow 0.3s ease;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px ${p => p.theme.colors.accent};
    border-radius: 16px;
  }
`;

export const CarItemLink = styled(Link)`
  text-decoration: none;
`;

export const CarItemImg = styled.img`
  display: block;
  width: 100%;

  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 330px;
    height: 208px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 250px;
  }
`;

export const CarItemCaption = styled.div`
  background-color: ${p => p.theme.colors.backgroundimage};
`;

export const CarItemTitle = styled.h3`
  text-align: center;
  padding: 8px 0px;
`;

export const CarItemText = styled.p`
  text-align: center;
  padding: 8px 0px;
`;

export const CarItemPrice = styled.span`
  text-align: center;
  color: ${p => p.theme.colors.accent};
`;

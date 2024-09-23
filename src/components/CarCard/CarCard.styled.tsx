import styled from 'styled-components';

export const CarCardContainer = styled.li`
  display: block;

  border: 1px solid ${p => p.theme.colors.backgroundimage};

  overflow: hidden;

  transition: box-shadow 0.3s ease;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px ${p => p.theme.colors.btnHover};
    border-radius: 10px;
  }
`;

export const CarCardImg = styled.img`
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

export const CarCardTitle = styled.h3`
  text-align: center;
  padding: 8px 0px;
`;

export const CarCardText = styled.p`
  text-align: center;
  padding: 8px 0px;
`;

export const CarCardPrice = styled.span`
  text-align: center;
  color: ${p => p.theme.colors.accent};
`;

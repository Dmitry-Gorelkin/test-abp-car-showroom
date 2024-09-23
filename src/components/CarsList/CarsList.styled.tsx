import styled from 'styled-components';

export const CarsListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px 15px;
  }
`;

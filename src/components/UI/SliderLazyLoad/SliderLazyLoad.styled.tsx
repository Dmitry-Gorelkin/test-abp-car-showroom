import styled from 'styled-components';

export const SliderLazyLoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
`;

export const SliderLazyLoadContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;

import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  gap: 15px;

  border: 1 solid ${p => p.theme.colors.btn};

  @media screen and (min-width: 425px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 15px;

  @media screen and (min-width: 425px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

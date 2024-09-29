import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  gap: 15px;

  @media screen and (min-width: 425px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const FilterInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FilterInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  height: 30px;

  @media screen and (min-width: 768px) {
    height: 40px;
  }
`;

export const FilterInput = styled.input`
  height: 30px;
  padding: 5px;

  border: 1px solid ${p => p.theme.colors.backgroundSecondary};
  border-radius: 4px;

  outline: none;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.accent};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 230px;
  }
`;

export const FilterLabelChecked = styled.label`
  display: flex;
  align-items: center;

  height: 30px;
  gap: 15px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;

    gap: 10px;
  }
`;

export const FilterCheckedText = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  @media screen and (min-width: 768px) {
    height: 40px;
  }
`;

export const FilterInputChecked = styled.input`
  width: 25px;
  height: 25px;

  appearance: none;

  border: 1px solid ${p => p.theme.colors.backgroundSecondary};
  border-radius: 4px;

  cursor: pointer;

  outline: none;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.accent};
  }

  &:checked {
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const FilterSelect = styled.select`
  height: 30px;
  padding: 5px;

  border: 1px solid ${p => p.theme.colors.backgroundSecondary};
  border-radius: 4px;

  outline: none;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 230px;
  }
`;

export const FilterButtonContainer = styled.div`
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

import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 10px;

  @media screen and (min-width: 425px) {
    padding: 15px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 25px;
  }
`;

export const ModalInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;

  padding: 15px;
  margin-bottom: 15px;

  border: 1px solid ${p => p.theme.colors.backgroundSecondary};
  border-radius: 16px;
`;
export const ModalTextarea = styled.textarea`
  display: block;
  width: 100%;

  height: 150px;

  padding: 15px;
  margin-bottom: 15px;

  border: 1px solid ${p => p.theme.colors.backgroundSecondary};
  border-radius: 16px;
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* padding: 15px; */

  gap: 15px;
`;

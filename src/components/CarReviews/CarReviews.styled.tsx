import styled from 'styled-components';

export const CarReviewsContainer = styled.div`
  display: flex;

  flex-direction: column;

  gap: 15px;
`;

export const CarReviewsTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const CarReviewsList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const CarReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;

  gap: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.backgroundSecondary};
  }
`;

export const CarReviewsName = styled.span`
  color: ${p => p.theme.colors.textSecondary};
`;

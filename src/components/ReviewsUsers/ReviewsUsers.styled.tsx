import styled from 'styled-components';

export const ReviewsUsersContainer = styled.div`
  display: flex;

  flex-direction: column;

  gap: 15px;
`;

export const ReviewsUsersTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const ReviewsUsersList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const ReviewsUsersItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;

  gap: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.backgroundSecondary};
  }
`;

export const ReviewsUsersName = styled.span`
  color: ${p => p.theme.colors.textSecondary};
`;

import styled from 'styled-components';

export const CarDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const CarDescriptionTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const CarDescriptionText = styled.p`
  color: ${p => p.theme.colors.textSecondary};
`;

export const CarDescriptionSpan = styled.span`
  color: ${p => p.theme.colors.accent};
`;

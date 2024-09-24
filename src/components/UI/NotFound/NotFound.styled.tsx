import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundTitle = styled.h2`
  text-transform: uppercase;
  color: ${p => p.theme.colors.textSecondary};
`;

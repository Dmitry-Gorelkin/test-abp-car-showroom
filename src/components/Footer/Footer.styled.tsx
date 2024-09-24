import styled from 'styled-components';

export const FooterBackgroundColor = styled.div`
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const FooterText = styled.p`
  color: ${p => p.theme.colors.textWhite};
`;

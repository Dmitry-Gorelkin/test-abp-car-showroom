import styled from 'styled-components';

export const FooterBackgroundColor = styled.div`
  /* position: relative;
  bottom: 0; */

  color: ${p => p.theme.colors.textWhite};

  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const FooterContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

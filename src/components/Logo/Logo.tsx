import { FC } from 'react';

import { LogoContainer, LogoIcon, LogoText } from './Logo.styled';

type LogoTS = {
  to: string;
};

const Logo: FC<LogoTS> = ({ to }) => {
  return (
    <LogoContainer to={to}>
      <LogoText>Car</LogoText>
      <LogoIcon />
      <LogoText>Showroom</LogoText>
    </LogoContainer>
  );
};

export default Logo;

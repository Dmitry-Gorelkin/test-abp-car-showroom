import { FC } from 'react';

import { LogoContainer, LogoIcon, LogoText } from './Logo.styled';

type LogoProps = {
  to: string;
};

const Logo: FC<LogoProps> = ({ to }) => {
  return (
    <LogoContainer to={to}>
      <LogoText>Car</LogoText>
      <LogoIcon />
      <LogoText>Showroom</LogoText>
    </LogoContainer>
  );
};

export default Logo;

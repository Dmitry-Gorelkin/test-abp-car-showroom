import { FC } from 'react';
import { Section } from '../UI/Section/Section.styled';
import { HeroMainContainer, HeroMainTitle } from './HeroMain.styled';

const HeroMain: FC = () => {
  return (
    <Section>
      <HeroMainContainer>
        <HeroMainTitle>Car Showroom</HeroMainTitle>
      </HeroMainContainer>
    </Section>
  );
};

export default HeroMain;

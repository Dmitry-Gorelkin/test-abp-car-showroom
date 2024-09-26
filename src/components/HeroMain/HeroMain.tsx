import { FC } from 'react';
import { HeroMainContainer, HeroMainTitle } from './HeroMain.styled';
import { Section } from '../UI/Section/Section.styled';

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

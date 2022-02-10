import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to  <br/>
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quae eaque animi temporibus tenetur suscipit, quisquam ipsam reprehenderit recusandae, corrupti perspiciatis sunt rerum ea. Distinctio?
        </SectionText>
        <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
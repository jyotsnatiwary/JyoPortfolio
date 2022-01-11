import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Jyotsna 
        <br/>
        SDE Intern @BlackRock
      </SectionTitle>
      <SectionText>
      I am currently pursuing Btech in CSE from VIT Bhopal University. I am originally from Bhagalpur, Bihar which is also known as silk city. My greatest strength is my leadership ability. Being pragmatic by nature, I inhabit an up help desire and straight forward outlook. I believe in constant learning and exploring new things. 
      </SectionText>
      <Button onClick={()=>window.location = '#about'}>Learn More</Button>
      
    </LeftSection>
  </Section>
);
export default Hero;
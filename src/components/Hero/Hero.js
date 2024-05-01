import React, {useEffect}from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {NavLink} from './HeroStyles';
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = (props) => { 
return(
  <div> 
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Aiming to leverage my expertise and passion for software development to excel as a Full Stack Engineer, continually enhancing my skills and knowledge on a daily basis. Dedicated to becoming the optimal choice for companies by delivering exceptional value through innovative solutions and a commitment to excellence in every aspect of development.
        </SectionText>
        <Link href="#projects">
          <NavLink> <Button onClick={props.handleClick}>Learn More</Button> </NavLink>
        </Link>
      </LeftSection>
    </Section>
  </div>
)};

export default Hero;
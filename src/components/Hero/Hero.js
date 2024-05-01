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
          Aiming to use my knowledge and enhance my skills on daily basis as a Web Developer. Aiming to be the best fitting choice for the company...
        </SectionText>
        <Link href="#projects">
          <NavLink> <Button onClick={props.handleClick}>Learn More</Button> </NavLink>
        </Link>
      </LeftSection>
    </Section>
  </div>
)};

export default Hero;
import React, {useEffect} from "react";
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import ProfilePics from '../components/ProfilePic/Profile';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  
  return (
    <Layout>
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
        <div data-aos="fade-up">
          <ProfilePics />
        </div>
        
        <div data-aos="fade-up">
          <Projects />
        </div>
      
        <div data-aos="fade-up">
          <Technologies />
        </div>
        
        <div data-aos="fade-up">
          <Timeline />
        </div>
       
        <div data-aos="fade-up">
          <Acomplishments />
        </div>
    </Layout>
  );
};

export default Home;

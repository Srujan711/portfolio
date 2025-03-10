import React from 'react';
import { Fade } from 'react-reveal';

const About: React.FC = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="about">
        <h1>About Me</h1>
        <p>Experienced full-stack developer with expertise in TypeScript, Java, and Python since 2021. I transform complex business challenges into elegant technical solutions through the entire product lifecycle – from ideation and wireframing to production deployment.</p>
      </div>
    </Fade>
  );
};

export default About;
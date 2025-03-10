import React from 'react';
import { Fade } from 'react-reveal';

const Contact = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="contact">
        <h1>Contact</h1>
        <p>Email: srujanvithlani@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/SrujanVithalani">SrujanVithalani</a></p>
        <p>GitHub: <a href="https://github.com/Srujan711">Srujan711</a></p>
        <p>Phone: (732) 626-1986</p>
      </div>
    </Fade>
  );
};

export default Contact;
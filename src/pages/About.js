import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';

const AboutContainer = styled.div`
  background: linear-gradient(to bottom, #900000, #700000);
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top:15px;

  img {
    width: 900px; /* Adjust the width as needed */
    height: 415px; /* Adjust the height as needed */
    object-fit: cover;
    border-radius: 7px; /* Rounded corners */
    margin: 0 20px;
  }
`;

const ConnectIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1.5em;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #45a049;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>About Us</SectionTitle>
      <ImageContainer>
        <img src="/images/homepage.jfif" alt="College" />
      </ImageContainer>
      <p>
      The college aims to positively impact the student’s lives by making premium education affordable and accessible to everyone. We believe that for learning to be effective, it needs to be delivered in a congenial environment that not just nurtures but stimulates the interest of the best minds that receive it. KLE DR.MSSCET offers a world-class infrastructure that supports the pursuit of knowledge and the exercise of individual interests.
      </p>
      <ConnectIcons>
        <a href="https://www.instagram.com/klescetmedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/kle-technological-university-msscet-belagavi-campus/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="tel:0831 244 0322">
          <FaPhone />
        </a>
      </ConnectIcons>
    </AboutContainer>
  );
};

export default About;
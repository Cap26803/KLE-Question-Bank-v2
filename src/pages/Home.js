import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  background: linear-gradient(to bottom, #900000, #700000);
  height: 89.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Title = styled.h1`
  font-size: 3em;
  animation: ${bounce} 2.5s infinite;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const AnimatedButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 1.2em;
  background-color: #000000;
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 7px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, border-color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000000;
    transform: scale(1.05);
    border-color: #45a049;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to KLE Question Bank</Title>
      <ButtonContainer>
        <AnimatedButton to="/login">Login</AnimatedButton>
        <AnimatedButton to="/register">Register</AnimatedButton>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
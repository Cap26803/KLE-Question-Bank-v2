import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  background-color: #900000;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00000;
`;

const LoginWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const InputWrapper = styled.div`
  margin: 20px 0;

  label {
    display: block;
    margin-bottom: 5px;
    color: #000;
    font-size: 14px;
  }

  input {
    width: calc(100% - 24px);
    padding: 12px;
    font-size: 16px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
  }
`;

const ButtonWrapper = styled.div`
  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }

  a {
    color: #888;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    font-size: 14px;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Use the useHistory hook

  const handleLogin = () => {
    // Implement login logic here

    // Assuming you have a way to determine the user type (e.g., by checking roles in the backend)
    const isStudent = true; // Replace with your actual logic

    if (isStudent) {
      // Display pop-up
      window.confirm('Login Successful for Student');

      // Redirect to /student
      history.push('/student');
    } else {
      // Display pop-up
      window.confirm('Login Successful for Professor');

      // Redirect to /professor
      history.push('/professor');
    }
  };

  return (
    <Container>
      <LoginWrapper>
        <h1>Login</h1>
        <InputWrapper>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <ButtonWrapper>
          <button onClick={handleLogin}>Login</button>
          <a href="/register">Don't have an account</a>
        </ButtonWrapper>
      </LoginWrapper>
    </Container>
  );
};

export default Login;

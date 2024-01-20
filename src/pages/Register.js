// Register.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #900000;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00000;
`;

const RegisterWrapper = styled.div`
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
    color: #00000;
    font-size: 14px;
  }

  input,
  select {
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

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          userType,
          password,
        }),
      });

      if (response.ok) {
        console.log('User registered successfully');
        history.push('/login'); // Redirect to /student
        // or
        // history.push('/professor'); // Redirect to /professor
        // Depending on the selected user type
      } else {
        const data = await response.json();
        console.error('Error registering user:', data.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <Container>
      <RegisterWrapper>
        <h1>Register User</h1>
        <InputWrapper>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="">Select User Type</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
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
          <button onClick={handleRegister}>Submit</button>
          <a href="/login">Already have an account?</a>
        </ButtonWrapper>
      </RegisterWrapper>
    </Container>
  );
};

export default Register;
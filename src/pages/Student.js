import React, { useState, useEffect } from 'react';
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

const ViewWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const Student = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch the list of files from the backend API
    // and update the 'files' state
    const fetchData = async () => {
      try {
        // Replace 'API_ENDPOINT' with your actual backend API endpoint
        const response = await fetch('API_ENDPOINT/files');
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <ViewWrapper>
        <h1>Hey, Student!</h1>
        <FileList>
          {files.map((file) => (
            <li key={file.id}>
              <a href={`API_ENDPOINT/files/${file.id}`} target="_blank" rel="noopener noreferrer">
                {file.name}
              </a>
            </li>
          ))}
        </FileList>
      </ViewWrapper>
    </Container>
  );
};

export default Student;

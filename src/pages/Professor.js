// Professor.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  background-color: #900000;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00000;
`;

const UploadWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Professor = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data', // Not needed
        },
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully');
        toast.success('File uploaded successfully'); // Show a success toaster
      } else {
        const data = await response.json();
        console.error('Error uploading file:', data.message);
        toast.error(`Error: ${data.message}`); // Show an error toaster
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file'); // Show an error toaster
    }
  };

  return (
    <Container>
      <UploadWrapper>
        <h1>Upload PDF</h1>
        <input type="file" onChange={handleFileChange} />
        {file && <p>Selected File: {file.name}</p>}
        <button onClick={handleUpload}>Upload</button>
      </UploadWrapper>
      <ToastContainer /> {/* Toast container */}
    </Container>
  );
};

export default Professor;

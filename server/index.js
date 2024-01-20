// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'YOUR_CONNECTION_STRING' with your MongoDB connection string)
mongoose.connect('mongodb+srv://cap26803:g4SSP5l4JW3FbT7J@klequestionbank.xfga2az.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  userType: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Example API endpoint for user registration
app.post('/register', async (req, res) => {
  const { name, email, userType, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      userType,
      password,
    });

    await newUser.save();

    res.json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
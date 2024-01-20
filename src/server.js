const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://cap26803:g4SSP5l4JW3FbT7J@klequestionbank.xfga2az.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  userType: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Multer Storage Configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// PDFDocument Model
const PDFDocument = mongoose.model('PDFDocument', new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
}));

// Routes
app.use('/api', require('./routes/api'));

app.post('/register', async (req, res) => {
  try {
    const { name, email, userType, password } = req.body;

    const user = new User({ name, email, userType, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// File Upload Route
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    const pdfDocument = new PDFDocument({
      name: file.originalname,
      data: file.buffer,
      contentType: file.mimetype,
    });

    await pdfDocument.save();

    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Professor Route
app.get('/professor', (req, res) => {
  // Handle professor route logic here
  res.send('Welcome, Professor!');
});

// Student Route
app.get('/student', (req, res) => {
  // Handle student route logic here
  res.send('Hello, Student!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));

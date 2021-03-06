const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(fileUpload());

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/forums', require('./routes/api/forums'));
app.use('/api/topics', require('./routes/api/topics'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));

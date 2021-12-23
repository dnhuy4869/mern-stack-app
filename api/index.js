const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to MongoDB');
})

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
const express = require('express');
const app = express();
const variables = require('../bin/config/variables');

const userRouter = require('../routes/user-router');

// Routes
app.use('/user', userRouter);

module.exports = app;
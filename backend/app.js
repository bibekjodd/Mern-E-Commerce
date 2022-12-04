const express = require('express')
const app = express();
app.use(express.json());

const errorMiddleware = require('./middleware/error');

// route imports
const product = require('./routes/productRoute');



app.use('/api/v1', product);
app.use(errorMiddleware);

// middleware for error




module.exports = app;
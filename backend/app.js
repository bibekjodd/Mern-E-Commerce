const express = require('express')
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookieParser())

const errorMiddleware = require('./middleware/error');

// route imports
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');


app.use('/api/v1', product);
app.use('/api/v1', user)
app.use(errorMiddleware);

// middleware for error




module.exports = app;
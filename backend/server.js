const app = require('./app');
// config
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });
// connecting to database
const connectDatabase = require('./config/database');
connectDatabase();




app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
})

const app = require('./app');
// config
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });

// -------- handling uncaught exception --------
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to uncaught exception`)
    process.exit(1);
})


// connecting to database
const connectDatabase = require('./config/database');
connectDatabase();



const server = app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(() => {
        process.exit(1);
    });
})

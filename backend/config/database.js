const mongoose = require('mongoose')


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI)
        .then((data) => {
            console.log(`Database connection established`);
        })
        .catch(error => {
            console.log(error);
        })
}

module.exports = connectDatabase
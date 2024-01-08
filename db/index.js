const mongoose = require('mongoose');
const {DB_NAME} = require('../constants') 


exports.connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); ""
        console.log(`MONOGDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    }


    catch (error) {
        console.log("MONGODB connection error", error.message)
        process.exit(1)
    }
};
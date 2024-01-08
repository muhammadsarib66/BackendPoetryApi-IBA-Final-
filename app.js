const express = require('express');
const cors = require('cors');
const ErrorHandler = require('./middlewares/ErrorHandler')

const app = express();


app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credential : true
}))



// const poetryRouter = require('./routes/poertryRoutes')
// app.use('/api/v1', poetryRouter)
// app.use(ErrorHandler);
module.exports = app
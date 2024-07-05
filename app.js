const express = require('express')
require('dotenv').config()
require('express-async-errors')
const app = express()

//db
const connectDb = require('./db/connect')

//routes
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobsRoute')

//error handlers
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')



app.use(express.json())

//routes
app.use('/api/v1/jobs',jobsRouter)
app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


port = process.env.PORT || 3000
const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, ()=> {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error);
    }
}
start()

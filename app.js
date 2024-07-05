const express = require('express')
require('dotenv').config()
const connectDb = require('./db/connect')
const jobsRouter = require('./routes/jobsRoute')

const app = express()

app.use(express.json())
app.use('/api/v1/jobs',jobsRouter)


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

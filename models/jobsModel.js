const {mongoose } = require("mongoose");

const jobsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
       
    }
})

module.exports = mongoose.model('jobs', jobsSchema)
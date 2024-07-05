const { mongoose } = require("mongoose");

const connectDb = async (url) => {
    await mongoose.connect(url).then(() => {
        console.log("Connected to DB");
    })
}

module.exports = connectDb
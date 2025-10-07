
const { default: mongoose, model } = require("mongoose")
require('dotenv').config()

const db = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected")
    } catch (error) {
        console.log(error)        
    }

}

module.exports = db

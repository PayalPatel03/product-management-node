const { default: mongoose } = require("mongoose")
require('dotenv').config()

const db = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected...")
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports = db
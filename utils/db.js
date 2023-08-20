const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dhullv73:ga54QKNnTLKRRvTc@cluster0.hvvbwlp.mongodb.net/Tasks?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
}

module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB - investment service");
    } catch (err) {
        console.error("DB connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

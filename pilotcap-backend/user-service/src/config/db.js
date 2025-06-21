const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to User DB");
    } catch (err) {
        console.error("DB connection error:", err);
        process.exit(1);
    }
};

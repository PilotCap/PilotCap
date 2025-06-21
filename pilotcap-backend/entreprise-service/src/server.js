require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app');

connectDB();
app.listen(process.env.PORT || 5002, () =>
    console.log(`Entreprise Service running on port ${process.env.PORT || 5002}`)
);
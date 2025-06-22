const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const entrepriseProfileRoutes = require('./routes/entrepriseProfileRoutes');

const app = express();

// Middlewares
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/entreprise-profile', entrepriseProfileRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('PilotCap EntrepriseProfile Service running');
});

module.exports = app;

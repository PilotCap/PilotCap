const express = require('express');
const cors = require('cors');
const opportunityRoutes = require('./routes/opportunityRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/opportunities', opportunityRoutes);

module.exports = app;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const proposalRoutes = require('./routes/proposalRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/proposals', proposalRoutes);

module.exports = app;

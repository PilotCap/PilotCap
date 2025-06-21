const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use('/api/entreprises', require('./routes/entrepriseRoutes'));

module.exports = app;
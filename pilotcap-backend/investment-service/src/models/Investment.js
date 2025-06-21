const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    project: String,
    type: String,
    amount: Number,
    date: Date,
    return: String,
    status: { type: String, enum: ['Actif', 'En attente', 'Clôturé'] }
});

module.exports = mongoose.model('Investment', investmentSchema);

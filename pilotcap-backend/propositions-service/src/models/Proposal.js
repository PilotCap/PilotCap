const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    investor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: Number,
    date: Date,
    duration: Number,
    message: String,
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    entreprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Entreprise',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Proposal', proposalSchema);

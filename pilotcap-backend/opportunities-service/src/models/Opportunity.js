const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
    entreprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    nomProjet: { type: String, required: true },
    secteur: { type: String, required: true },
    description: { type: String, required: true },
    montant: { type: Number },
    statut: { type: String, enum: ['en attente', 'publiée'], default: 'en attente' },
    logoUrl: { type: String },
    imageUrl: { type: String },
    videoUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Opportunity', opportunitySchema);

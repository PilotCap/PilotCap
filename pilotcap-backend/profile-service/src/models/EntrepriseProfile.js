const mongoose = require('mongoose');

const entrepriseProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    nom: String,
    secteur: String,
    email: String,
    wallet: String,
    anneeCreation: Number,
    chiffreAffaires: String,
    capitalSocial: String
}, { timestamps: true });

module.exports = mongoose.model('EntrepriseProfile', entrepriseProfileSchema);

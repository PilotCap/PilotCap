const mongoose = require('mongoose');

const entrepriseSchema = new mongoose.Schema({
    nom: String,
    taux: Number,
    capital: Number,
    disponible: Number,
    secteur: String,
    couleur: String,
    icone: String
});

module.exports = mongoose.model('Entreprise', entrepriseSchema);

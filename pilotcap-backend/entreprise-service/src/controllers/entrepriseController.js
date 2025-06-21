const Entreprise = require('../models/Entreprise');

exports.getEntreprises = async (req, res) => {
    try {
        const entreprises = await Entreprise.find();
        res.json(entreprises);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

const EntrepriseProfile = require('../models/EntrepriseProfile');

exports.getProfile = async (req, res) => {
    try {
        const profile = await EntrepriseProfile.findOne({ user: req.entrepriseId });
        if (!profile) return res.status(404).json({ message: 'Profil introuvable' });
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updated = await EntrepriseProfile.findOneAndUpdate(
            { user: req.entrepriseId },
            req.body,
            { new: true, upsert: true }
        );
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Erreur de mise à jour' });
    }
};

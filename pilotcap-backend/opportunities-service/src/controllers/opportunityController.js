const Opportunity = require('../models/Opportunity');

exports.createOpportunity = async (req, res) => {
    try {
        const entrepriseId = req.userId; // récupéré via middleware
        const newOpportunity = new Opportunity({ ...req.body, entreprise: entrepriseId });
        await newOpportunity.save();
        res.status(201).json(newOpportunity);
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la création de l’opportunité' });
    }
};

exports.getOpportunitiesByEntreprise = async (req, res) => {
    try {
        const entrepriseId = req.userId;
        const opportunities = await Opportunity.find({ entreprise: entrepriseId });
        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

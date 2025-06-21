const Proposal = require('../models/Proposal');

exports.getProposalsByEntreprise = async (req, res) => {
    try {
        const entrepriseId = req.entrepriseId;
        const proposals = await Proposal.find({ entreprise: entrepriseId }).populate('entreprise');
        res.status(200).json(proposals);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
};


exports.createProposal = async (req, res) => {
    try {
        const newProposal = new Proposal(req.body);
        await newProposal.save();
        res.status(201).json(newProposal);
    } catch (error) {
        res.status(400).json({ error: 'Données invalides' });
    }
};

exports.updateProposalStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updated = await Proposal.findByIdAndUpdate(id, { status }, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: 'Échec mise à jour' });
    }
};

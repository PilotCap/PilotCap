const Investment = require('../models/Investment');

// GET /api/investments
exports.getUserInvestments = async (req, res) => {
    const userId = req.user.id;
    try {
        const investments = await Investment.find({ userId });
        res.json(investments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/investments/stats
exports.getUserStats = async (req, res) => {
    const userId = req.user.id;
    try {
        const investments = await Investment.find({ userId });

        const balance = 10000; // valeur fictive à adapter plus tard
        const total = investments.reduce((sum, inv) => sum + inv.amount, 0);
        const averageReturn = investments.length
            ? investments.reduce((sum, inv) => sum + parseFloat(inv.return.replace('%', '')), 0) / investments.length
            : 0;

        res.json({ balance, total, averageReturn });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.invest = async (req, res) => {
    try {
        const { entrepriseId, amount } = req.body;
        const newInvestment = new Investment({
            investor: req.user.id,
            entreprise: entrepriseId,
            amount
        });

        await newInvestment.save();
        res.status(201).json({ message: 'Investment successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error processing investment', error });
    }
};

exports.getMyInvestments = async (req, res) => {
    try {
        const investments = await Investment.find({ investor: req.user.id }).populate('entreprise');
        res.status(200).json(investments);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve investments', error });
    }
};


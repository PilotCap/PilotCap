const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.loginUser = async (req, res) => {
    const { email, password} = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user);
        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            },
            token
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'Tous les champs sont requis.' });
        }

        if (!['investisseur', 'entreprise'].includes(role)) {
            return res.status(400).json({ message: 'Rôle invalide' });
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Email déjà utilisé' });
        }

        const user = new User({ name, email, password, role });
        await user.save();

        const token = generateToken(user);

        res.status(201).json({
            message: 'Signup successful',
            userId: user._id,
            role: user.role,
            token
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};


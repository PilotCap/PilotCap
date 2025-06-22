const express = require('express');
const router = express.Router();
const { getUserInvestments, getUserStats } = require('../controllers/investmentController');
const authenticateToken = require('../middleware/authMiddleware');
const investmentController = require('../controllers/investmentController');


// Protège les routes avec JWT
router.get('/', authenticateToken, getUserInvestments);
router.get('/stats', authenticateToken, getUserStats);

// Route POST uniquement accessible aux investisseurs
router.post('/invest', verifyToken, checkRole('investor'), investmentController.invest);

// Route GET pour voir les investissements d'un utilisateur
router.get('/myinvestments', verifyToken, checkRole('investor'), investmentController.getMyInvestments);

module.exports = router;


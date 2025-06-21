const express = require('express');
const router = express.Router();
const { getUserInvestments, getUserStats } = require('../controllers/investmentController');
const authenticateToken = require('../middleware/authMiddleware');

// Protège les routes avec JWT
router.get('/', authenticateToken, getUserInvestments);
router.get('/stats', authenticateToken, getUserStats);

module.exports = router;


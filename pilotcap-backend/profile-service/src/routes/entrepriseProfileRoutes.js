const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/entrepriseProfileController');
const authEntreprise = require('../middleware/authEntreprise');

router.get('/', authEntreprise, getProfile);
router.put('/', authEntreprise, updateProfile);

module.exports = router;

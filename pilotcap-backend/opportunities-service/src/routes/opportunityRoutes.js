const express = require('express');
const router = express.Router();
const { createOpportunity, getOpportunitiesByEntreprise } = require('../controllers/opportunityController');
const authEntreprise = require('../middleware/authEntreprise');

router.post('/', authEntreprise, createOpportunity);
router.get('/', authEntreprise, getOpportunitiesByEntreprise);

module.exports = router;

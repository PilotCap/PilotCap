const express = require('express');
const router = express.Router();
const { getProposalsByEntreprise } = require('../controllers/proposalController');
const authEntreprise = require('../middleware/authEntreprise');


router.get('/', authEntreprise, getProposalsByEntreprise);

module.exports = router;

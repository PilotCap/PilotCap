const express = require('express');
const router = express.Router();
const { getProposalsByEntreprise } = require('../controllers/proposalController');
const authEntreprise = require('../middleware/authEntreprise');

const { updateProposalStatus } = require('../controllers/proposalController');
router.patch('/:id/status', authEntreprise, updateProposalStatus);

router.get('/', authEntreprise, getProposalsByEntreprise);

module.exports = router;

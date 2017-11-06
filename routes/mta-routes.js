const express = require('express');
const mtaRoutes = express.Router();
const mtaHelper = require('../services/mta-helper');

mtaRoutes.post('/', mtaHelper.getMta, (req, res) => { res.json({ data: res.locals.mta })

})

module.exports = mtaRoutes;
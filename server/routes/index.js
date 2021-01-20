const express = require('express');
const db = require('../db');
const router = express.Router();

// Routes
router.get('/api/v1/stats', async (req, res, next) => {
    try {
        let results = await db.guilds();
        res.json(results);
    } catch(e) {
        res.sendStatus(500);
    }
})

router.get('*', (req, res, next) => {
    res.redirect('https://yuwuko.github.io/');
})

module.exports = router;
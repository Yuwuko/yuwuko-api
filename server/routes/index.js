const express = require('express');
const db = require('../db');
const router = express.Router();

// Routes
router.get('/', (req, res, next) => {
    res.redirect('https://yuwuko.github.io/');
})

router.get('/uptime', async (req, res, next) => {
    try {
        let results = await db.uptime();
        res.json(results);
    } catch(e) {
        res.sendStatus(500);
    }
})

router.get('/events', async (req, res, next) => {
    try {
        let results = await db.events();
        res.json(results);
    } catch(e) {
        res.sendStatus(500);
    }
})

router.get('/guilds', async (req, res, next) => {
    try {
        let results = await db.guilds();
        res.json(results);
    } catch(e) {
        res.sendStatus(500);
    }
})

module.exports = router;
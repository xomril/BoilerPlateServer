const express = require('express');
const path = require('path');
const axios = require('axios');
const router = express.Router();
const dir = path.join(__dirname, '../public');


router.get('/', async (req, res) => {
    res.render('index')
})

module.exports = router;



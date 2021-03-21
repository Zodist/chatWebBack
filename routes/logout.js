const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', function(req, res, next) {
    req.logout();
    return res.json({ user: null });
});

module.exports = router;
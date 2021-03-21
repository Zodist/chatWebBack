const express = require('express');
const router = express.Router();
var users = require('../data/users.json');

router.get('/', function(req, res, next) {
    if (req.isAuthenticated() && req.user) {
        return res.json({ user: req.user });
    }
    return res.json({ user: null });
});

router.post('/', function(req, res, next) {
    users.push(req.body);
    return res.json({ user: null });
});

module.exports = router;
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', function(req, res, next) {
    if (req.isAuthenticated() && req.user) {
        return res.json({ user: req.user });
    }
    return res.json({ user: null });
});

router.post('/', function(req, res, next) {
    console.log('req.isAuthenticated() : ', req.isAuthenticated())
    console.log('req.user : ', req.user)
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.json(info);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.json({ user });
        });
    })(req, res, next);     // 미들웨어 호출
});

module.exports = router;
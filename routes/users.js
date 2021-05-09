const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const User = require('../models/userV2');

/**
 * @swagger
 *  /api/users:
 *    get:
 *      tags:
 *      - users
 *      summary: 모든 User 조회
 *      description: 모든 User 조회
 *      responses:
 *       200:
 *        description: User 조회 성공
 *        schema:
 *          $ref: '#/components/schemas/Users'
 */
// Find All
router.get('/',  (req, res) => {
    User.find({})
        .then((users) => {
            if (!users.length) return res.status(404).send({ err: 'users not Found' });
            res.send(users);
        })
        .catch(err => res.status(500).send(err));
});

module.exports = router;
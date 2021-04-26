const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const User = require('../models/user');

/**
 * @swagger
 *  /api/users/login:
 *    post:
 *      tags:
 *      - users
 *      summary: 로그인
 *      parameters:
 *      - in: body
 *        name: user
 *        description: The user to create.
 *        schema:
 *          $ref: '#/components/schemas/Users'     # <----------
 *      responses:
 *        "200":
 *          description: 로그인 성공
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Users'
 */
router.post('/login', usersController.signin);

/**
 * @swagger
 *  /api/users/new:
 *    post:
 *      tags:
 *      - users
 *      summary: Creates a new user.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          '201':
 *              description: Created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 */
router.post('/new', usersController.createNewUser);

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
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', function(req, res, next) {
    if (req.isAuthenticated() && req.user) {
        return res.json({ user: req.user });
    }
    return res.json({ user: null });
});

/**
 * @swagger
 *  /api/signup:
 *    post:
 *      tags:
 *      - signup
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
router.post('/', usersController.createNewUser);

/**
 * @swagger
 *  /api/signup/{id}:
 *    put:
 *      tags:
 *      - signup
 *      summary: user 정보 수정.
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
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
router.put('/:id', usersController.updateUser);

module.exports = router;
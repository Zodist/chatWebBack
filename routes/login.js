const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

/**
 * @swagger
 *  /api/login:
 *    post:
 *      tags:
 *      - login
 *      summary: 로그인
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *        "200":
 *          description: 로그인 성공
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Users'
 */
router.post('/', usersController.signin);

module.exports = router;
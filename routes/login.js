const express = require('express');
const router = express.Router();
const authUtil = require('../middlewares/auth').checkToken
const usersController = require('../controllers/users');

/**
 * @swagger
 *  /api/login:
 *    get:
 *      tags:
 *      - login
 *      summary: 로그인 여부 조회
 *      security:
 *          - Bearer: []
 *      responses:
 *        "200":
 *          description: 로그인 조회 성공
 *          content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      logined:
 *                          type: boolean
 */
//  router.get('/', authUtil, usersController.verifyToken);
 router.get('/', usersController.verifyToken);

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
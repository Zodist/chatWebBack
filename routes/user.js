const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const authUtil = require('../middlewares/auth').checkToken
const jwt = require('../modules/jwt');

/**
 * @swagger
 *  /api/user:
 *    get:
 *      tags:
 *      - user
 *      summary: 로그인한 유저 정보 조회
 *      security:
 *          - Bearer: []
 *      description: 로그인한 유저 정보 조회
 *      responses:
 *       200:
 *        description: 할일 조회 성공
 *        schema:
 *          $ref: '#/components/schemas/Users'
 */
router.get('/', authUtil, usersController.getUserInfo);

/**
 * @swagger
 *  /api/user:
 *    post:
 *      tags:
 *      - user
 *      summary: user 등록.
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
 *  /api/user/{id}:
 *    put:
 *      tags:
 *      - user
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
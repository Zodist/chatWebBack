const router = require('express').Router();
const Todo = require('../models/todo');
const authUtil = require('../middlewares/auth').checkToken

/**
 * @swagger
 *  /api/todos:
 *    get:
 *      tags:
 *      - todos
 *      summary: 모든 할일 조회
 *      security:
 *          - Bearer: []
 *      description: 모든 할일 조회
 *      responses:
 *       200:
 *        description: 할일 조회 성공
 *        schema:
 *          $ref: '#/components/schemas/Todos'
 */
// Find All
router.get('/', authUtil, (req, res) => {
    Todo.findAll()
        .then((todos) => {
            if (!todos.length) return res.status(404).send({ err: 'Todo not Found' });
            // res.send(`find succesfully: ${todos}`);
            res.send(todos);
        })
        .catch(err => res.status(500).send(err));
});

// Find One by todoid
router.get('/todoid/:todoid', (req, res) => {
    Todo.findOneByTodoid(req.params.todoid)
        .then((todo) => {
            if (!todo) return res.status(404).send({err: 'Todo not found'});
            res.send(`findOne successfully: ${todo}`);
        })
        .catch(err => res.status(500).send(err));
});

/**
 * @swagger
 *  /api/todos:
 *    post:
 *      tags:
 *      - todos
 *      summary: 할일 추가
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Todos'
 *      responses:
 *        "200":
 *          description: The created book.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Todos'
 */
// Create new todo documnet
router.post('/', (req, res) => {
    Todo.findAll()
        .then((todos) => {
            let element = req.body;
            element.todoid = todos.length + 1
            Todo.create(element)
                .then(todo => res.send(todo))
                .catch(err => res.status(500).send(err));
        })
        .catch(err => res.status(500).send(err));
});

// Update by todoid
router.put('/todoid/:todoid', (req, res) => {
    Todo.updateByTodoid(req.params.todoid, req.body)
        .then(todo => res.send(todo))
        .catch(err => res.status(500).send(err));
});

// Delete by todoid
router.delete('/todoid/:todoid', (req, res) => {
    Todo.deleteByTodoid(req.parames.todoid)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
});

module.exports = router;
const router = require('express').Router();
const Todo = require('../models/todo');

// Find All
router.get('/', (req, res) => {
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
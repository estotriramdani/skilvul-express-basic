const TodoModel = require('../../models/Todo');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getTodos = (req, res) => {
  const allTodos = TodoModel.findAll();
  res.json(allTodos);
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const addTodo = (req, res) => {
  const todo = TodoModel.create({ todo: req.body.todo });
  res.status(201).json(todo);
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const destroyTodo = (req, res) => {
  const { id } = req.params;
  const existing = TodoModel.findOne(+id);

  if (!existing) {
    res.status(404).json({
      status: false,
      message: 'Todo not found ID: ' + id,
    });
    return;
  }

  const todo = TodoModel.destroy(+id);
  res.status(203).json(todo);
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getTodo = (req, res) => {
  const { id } = req.params;
  const existing = TodoModel.findOne(+id);

  res.status(404).json(existing);
};

module.exports = {
  getTodos,
  addTodo,
  destroyTodo,
  getTodo,
};

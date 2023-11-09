const TodoModel = require('../../models/Todo');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getTodos = async (req, res) => {
  const allTodos = await TodoModel.findAll();
  res.json(allTodos);
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const addTodo = async (req, res) => {
  const todo = await TodoModel.create({ todo: req.body.todo });
  res.status(201).json(todo);
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const destroyTodo = async (req, res) => {
  const { id } = req.params;
  const existing = await TodoModel.findOne({
    where: {
      id: id,
    },
  });

  if (!existing) {
    res.status(404).json({
      status: false,
      message: 'Todo not found ID: ' + id,
    });
    return;
  }

  const todo = await TodoModel.destroy({
    where: {
      id: id,
    },
  });
  res.status(203).json(todo);
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getTodo = async (req, res) => {
  const { id } = req.params;
  const existing = await TodoModel.findOne({
    where: {
      id: id,
    },
  });

  if (!existing) {
    return res.status(404).json({
      status: false,
      message: 'Todo not found ID: ' + id,
    });
  }
  return res.status(200).json(existing);
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const existing = await TodoModel.findOne({
    where: {
      id: id,
    },
  });

  if (!existing) {
    res.status(404).json({
      status: false,
      message: 'Todo not found ID: ' + id,
    });
    return;
  }

  const todo = await TodoModel.update(
    {
      ...req.body,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.status(203).json(todo);
};

module.exports = {
  getTodos,
  addTodo,
  destroyTodo,
  getTodo,
  updateTodo,
};

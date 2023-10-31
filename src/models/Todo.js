let todos = [];

const TodoModel = {
  findAll: () => todos,
  create: ({ todo }) => {
    const obj = { id: todos.length + 1, todo };
    todos.push(obj);
    return obj;
  },
  findOne: (id) => todos.find((todo) => todo.id === id),
  destroy: (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    return todos;
  },
};

module.exports = TodoModel;

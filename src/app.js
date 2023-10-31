const express = require('express');
const tokenChecker = require('./middlewares/tokenChecker');
const { getTodos, addTodo, destroyTodo, getTodo } = require('./controllers/todos');

const app = express();

app.use(express.json());

app.get('/todos', getTodos);
app.post('/todos', tokenChecker, addTodo);
app.delete('/todos/:id', tokenChecker, destroyTodo);
app.get('/todos/:id', getTodo);

app.listen(4000, () => {
  console.info('App is listening to port:', 4000);
});

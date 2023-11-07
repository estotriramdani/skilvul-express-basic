require('dotenv/config');

const express = require('express');
const tokenChecker = require('./middlewares/tokenChecker');
const { getTodos, addTodo, destroyTodo, getTodo } = require('./controllers/todos');

const app = express();

app.use(express.json());

app.get('/api/todos', getTodos);
app.post('/api/todos', tokenChecker, addTodo);
app.delete('/api/todos/:id', tokenChecker, destroyTodo);
app.get('/api/todos/:id', getTodo);

app.listen(5000, () => {
  console.info('App is listening to port:', 5000);
});

module.exports = app;
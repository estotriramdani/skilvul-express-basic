require('dotenv/config');

const express = require('express');
const cors = require('cors');
const sequelize = require('./models');

const tokenChecker = require('./middlewares/tokenChecker');
const { getTodos, addTodo, destroyTodo, getTodo } = require('./controllers/todos');
const TodoModel = require('./models/Todo');
const { login } = require('./controllers/auth');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/api/auth/login', login);

app.get('/api/todos', getTodos);
app.post('/api/todos', tokenChecker, addTodo);
app.delete('/api/todos/:id', tokenChecker, destroyTodo);
app.get('/api/todos/:id', getTodo);

app.listen(5000, () => {
  sequelize
    .authenticate()
    .then(async () => {
      await TodoModel.sync();
      console.log('successfully connected to database');
    })
    .catch((reason) => {
      console.log('failed to connect to database', reason);
    });
  console.info('App is listening to port:', 5000);
});

module.exports = app;

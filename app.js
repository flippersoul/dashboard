const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/bookRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', bookRouter);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

const pgp = require('pgpromise')();

const connection = {
  host: 'localhost',
  port: '5432',
  database: 'имя_базы_данных',
  user: 'ваше_имя_пользователя',
  password: 'ваш_пароль',
};

const db = pgp(connection);

module.exports = db;

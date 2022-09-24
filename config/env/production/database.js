const fs = require('fs');
const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: host,
      port: port,
      database: database,
      user: user,
      password: password,
      ssl: {
        ca: fs.readFileSync(`${__dirname}/do-ca-certificate.crt`).toString(),
      },
    },
  },
});

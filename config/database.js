const path = require('path');

module.exports = ({
  env
}) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "ns1.aws.neozink.com"),
      port: env("DATABASE_PORT", 49190),
      database: env("DATABASE_NAME", "colmena"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "C0lm3n4"),
    },
    useNullAsDefault: true,
  },
});

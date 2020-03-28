// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: 'postgres:///handshake',
      host : '127.0.0.1',
      user : 'amykim',
      password : process.env.DB_PASSWORD,
      database : 'handshake',
      charset: 'utf8'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'handshake',
      user:     'amykim',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

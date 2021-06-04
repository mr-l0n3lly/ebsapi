// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'products',
      user: 'root',
      password: 'l@mbd@m3'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'products',
      user: 'root',
      password: 'l@mbd@m3'
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
    client: 'mysql',
    connection: {
      database: 'products',
      user: 'root',
      password: 'l@mbd@m3'
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

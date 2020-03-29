exports.up = knex =>
  knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

exports.down = knex => knex.schema.raw('DROP EXTENSION "uuid-ossp";');

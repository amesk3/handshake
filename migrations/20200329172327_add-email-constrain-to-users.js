exports.up = knex =>
  knex.schema.table('users', table => {
    table.unique('email');
  });

exports.down = knex =>
  knex.schema.table('users', table => {
    table.dropUnique('email');
  });

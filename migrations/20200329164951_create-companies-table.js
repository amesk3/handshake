exports.up = knex =>
  knex.schema.createTable('companies', table => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.string('headline');
    table.string('address');
    table.string('state');
    table.string('city');
    table.string('country');
    table.string('zip_code');
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable('companies');

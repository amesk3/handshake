// there will do two connection rows per connection A->B and B->A

exports.up = knex =>
  knex.schema.createTable('connections', table => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('user_id').notNullable();
    table.uuid('connection_user_id').notNullable();
    table.string('user_connection_status'); // not-connected, pending, connected,
    table.boolean('sent_invitation');
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable('connections');

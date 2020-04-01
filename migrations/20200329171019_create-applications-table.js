exports.up = knex =>
  knex.schema.createTable('applications', table => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('job_posting_id').notNullable();
    table.uuid('applicant_user_id');
    table.boolean('easy_apply').notNullable();
    table.boolean('applied');
    table.boolean('saved');
    table.text('content');
    table.date('applied_date').notNullable();
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable('applications');

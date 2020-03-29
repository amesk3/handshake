exports.up = knex =>
  knex.schema.createTable('job_postings', table => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('company_id')
    table.boolean('easy_apply').notNullable()
    table.string('headline') 
    table.string('job_title').notNullable() 
    table.string('job_function') 
    table.string('job_location').notNullable() 
    table.integer('number_of_applicants')  
    table.string('seniority_level') 
    table.string('address') 
    table.string('state') 
    table.string('city') 
    table.string('country') 
    table.integer('zip_code')
    table.string('description')
    table.date('posting_date').notNullable()
    table.string('employment_type')
    table.string('industry_type')
    table.string('experience_type')
    table.uuid('recruiter_user_id')
    table.timestamps(true, true);
  });


exports.down = knex => knex.schema.dropTable('job_postings');

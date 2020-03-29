
exports.up = knex =>
  knex.schema.createTable("users", table => {
        table.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.boolean('is_recruiter_flag').notNullable();
        table.string('email').notNullable();
        table.string('encrypted_password').notNullable();
        table.string('job_seeking_status');//notlooking, looking, na
        table.string('address');
        table.string('state');
        table.string('city');
        table.string('country');
        table.integer('zip_code');
        table.uuid('company_id');
        table.string('experience');
        table.string('education');
        table.string('school');
        table.string('profile_summary');
        table.string('headline');
        table.string('job_title');
        table.string('profile_img');
        table.string('gender');
        table.date('birthdate').notNullable();
        table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTableIfExists("users");
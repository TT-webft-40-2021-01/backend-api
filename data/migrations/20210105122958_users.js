const { table } = require("../../api/config");

exports.up = function(knex) {
    return knex.schema
    
    .createTable('users', tbl => {
        tbl.increments()
        tbl.string('role').notNullable()
        tbl.string('username', 255).notNullable().unique()
        tbl.string('password', 255).notNullable()
    })

    .createTable('rentals', tbl => {
        tbl.increments()
        tbl.integer('owner_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('renter_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('name')
        tbl.string('description')
        tbl.decimal('price', 2)
        tbl.string('photo_url')
    })

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('rentals').dropTableIfExists("users");
};

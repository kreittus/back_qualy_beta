/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('usuario',(table)=>{
        table.increments('id').primary();
        table.string('user');
        table.string('senha');
        table.string('email');
        table.string('telefone');
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('usuario')
};

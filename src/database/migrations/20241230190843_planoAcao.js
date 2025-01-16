/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('planoAcao',(table)=>{
        table.increments('id').primary();
        table.string('oQue');
        table.string('porQue');
        table.string('onde');
        table.integer('quem');
        table.date('quando');
        table.string('como');
        table.integer('quanto');

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('planoAcao')
};

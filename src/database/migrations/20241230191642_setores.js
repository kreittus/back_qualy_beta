/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('setores', (table)=>{
        table.increments('id').primary();
        table.string('descricao');
        table.integer('id_usuario_resp');
        table.integer('diretoria');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('setores')
};

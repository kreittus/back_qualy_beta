/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tarefas', (table)=>{
        table.increments('id').primary();
        table.string('descricao');
        table.date('dt_criacao');
        table.date('dt_venc');
        table.integer('notificacaoRef'); 
        table.string('obs');
    
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tarefas')
};

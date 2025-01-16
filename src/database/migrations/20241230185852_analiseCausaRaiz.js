/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('analiseCausaRaiz',(table)=>{
        table.increments('id').primary();
        table.integer('id_notificacao');
        table.boolean('discussaoMultiproficional');
        table.string('investicacaoRealizada');
        table.string('maoObra');
        table.string('maquina');
        table.string('meioAmbiente');
        table.string('material');
        table.string('medida');
        table.string('metodo');
        table.integer('id_planoAcao');

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('analiseCausaRaiz')
  
};

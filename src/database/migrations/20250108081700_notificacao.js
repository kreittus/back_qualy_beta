/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('notificacao', function(table){
        table.increments('id').primary();
        table.integer('usuario_responsavel')
        table.date('dt_ocorrencia');
        table.time('hr_ocorrencia');
        table.string('nomePaciente');
        table.float('id_evento');
        table.string('sexo');
        table.string('raca_cor');
        table.integer('idade');
        table.date('dt_internacao');
        table.integer('status');
        table.integer('id_tarefa');
        table.integer('id_setor_notificante');
        table.integer('id_setor_notificado');
        table.string('diagnostico');
        table.integer('registro');
        table.string('grau_dano');
        table.string('titulo');
        table.string('descricao');
        table.boolean('envolvimento');
        table.boolean('anonimato');

    
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('notificacao')
};

const connection = require('../database/connection/connection.js')
module.exports = {

    async CreateNotificacao(req, res){
         const {
                usuario_responsavel,
                dt_ocorrencia, 
                hr_ocorrencia, 
                nomePaciente,
                id_evento,
                sexo,
                raca_cor,
                idade,
                dt_internacao,
                status,
                id_tarefa,
                id_setor_notificante,
                id_setor_notificado,
                diagnostico,
                registro,
                grau_dano,
                titulo,
                descricao,
                envolvimento,
                anonimato
                } = req.body
                
create_at = new Date();
        var Data = {
                    usuario_responsavel,
                    dt_ocorrencia, 
                    hr_ocorrencia, 
                    nomePaciente,
                    id_evento,
                    sexo,
                    raca_cor,
                    idade,
                    dt_internacao,
                    status,
                    id_tarefa,
                    id_setor_notificante,
                    id_setor_notificado,
                    diagnostico,
                    registro,
                    grau_dano,
                    titulo,
                    descricao,
                    envolvimento,
                    anonimato,
                    create_at 
                    }  
        var conect = await connection('notificacao').insert(Data)   
        
        if(conect){
            return(res.status(200).json('Notificação inserida com sucesso!'))
        }else{
            return res.status(500).json('Erro ao inserir notificação')
        } 
    },
    
    async getAllNotificacoes(req,res){
        
        var conect = await connection('notificacao').select('*');    
        return res.json(conect);
    },

    async getNotificacoes(req,res){
        const {id} = req.body

        var conect = await connection('notificacao').where('id', id).select('*');    
        return res.json(conect);
    },

    async updateNotificacao(req, res){
        const {
            id,
            dt_ocorrencia, 
            hr_ocorrencia, 
            nomePaciente,
            id_evento,
            sexo,
            raca_cor,
            idade,
            dt_internacao,
            status,
            id_tarefa,
            id_setor_notificante,
            id_setor_notificado,
            diagnostico,
            registro,
            grau_dano,
            titulo,
            descricao,
            envolvimento,
            anonimato
            } = req.body

            var conect = await connection('notificacao')
            .where('id', id)
            .update('dt_ocorrencia',dt_ocorrencia)
            .update('hr_ocorrencia',hr_ocorrencia)
            .update('nomePaciente',nomePaciente)
            .update('id_evento',id_evento)
            .update('sexo',sexo)
            .update('raca_cor',raca_cor)
            .update('idade',idade)
            .update('dt_internacao',dt_internacao)
            .update('status',status)
            .update('id_tarefa',id_tarefa)
            .update('id_setor_notificante',id_setor_notificante) 
            .update('id_setor_notificado',id_setor_notificado) 
            .update('diagnostico',diagnostico)
            .update('registro',registro)
            .update('grau_dano',grau_dano)
            .update('titulo',titulo)
            .update('descricao',descricao)
            .update('envolvimento',envolvimento)
            .update('anonimato',anonimato)

            if(conect){
                return(res.status(200).json('Notificação alterada com sucesso!'))
            }else{
                return res.status(500).json('Erro ao inserir notificação')
            } 

    }

}
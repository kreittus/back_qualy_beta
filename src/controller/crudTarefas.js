const connection = require('../database/connection/connection.js')
module.exports = {

    async CreateTarefa(req, res){
         const {descricao,dt_criacao,dt_venc,id_notificacao} = req.body

        var Data = {descricao,dt_criacao,dt_venc,id_notificacao}  
        
        var conect = await connection('tarefas').insert(Data)   
        
        if(conect){
            return(res.status(200).json('Inserida com sucesso!'))
        }else{
            return res.status(500).json('Erro ao inserir')
        } 
    },
    
    async getAllTarefas(req,res){
        var conect = await connection('tarefas').select('*');    
        return res.json(conect);
    },

    async getTarefa(req,res){
        const {id} = req.body

        var conect = await connection('tarefas').where('id', id).select('*');    
        return res.json(conect);
    },

    async updateTarefa(req, res){
        const {id,dt_criacao,dt_venc,id_notificacao } = req.body

            var conect = await connection('diretoria')
            .where('id', id)
            .update('descricao',descricao)
            .update('dt_criacao',dt_criacao)
            .update('dt_venc',dt_venc)
            .update('id_notificacao',id_notificacao)

            if(conect){
                return(res.status(200).json('Alterada com sucesso!'))
            }else{
                return res.status(500).json('Erro ao inserir')
            } 

    }

}
const connection = require('../database/connection/connection.js')
module.exports = {

    async CreateSetores(req, res){
         const {descricao,id_usuario_resp,diretoria } = req.body

        var Data = {descricao,id_usuario_resp,diretoria}  
        
        var conect = await connection('setores').insert(Data)   
        
        if(conect){
            return(res.status(200).json('Inserido com sucesso!'))
        }else{
            return res.status(500).json('Erro ao inserir')
        } 
    },
    
    async getAllSetores(req,res){
        var conect = await connection('setores').select('*');    
        return res.json(conect);
    },

    async getsetor(req,res){
        const {id} = req.body

        var conect = await connection('setores').where('id', id).select('*');    
        return res.json(conect);
    },

    async updateSetores(req, res){
        const {id, descricao,id_usuario_resp,diretoria } = req.body

            var conect = await connection('setores')
            .where('id', id)
            .update('descricao',descricao)
            .update('id_usuario_resp',id_usuario_resp)
            .update('diretoria',diretoria)
            
            if(conect){
                return(res.status(200).json('Alterada com sucesso!'))
            }else{
                return res.status(500).json('Erro ao inserir')
            } 

    }

}
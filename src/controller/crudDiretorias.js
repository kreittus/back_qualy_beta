const connection = require('../database/connection/connection.js')
module.exports = {

    async CreateDiretoria(req, res){
         const {descricao,id_usuario_resp } = req.body

        var Data = {descricao,id_usuario_resp}  
        
        var conect = await connection('diretoria').insert(Data)   
        
        if(conect){
            return(res.status(200).json('Inserido com sucesso!'))
        }else{
            return res.status(500).json('Erro ao inserir')
        } 
    },
    
    async getAllDiretorias(req,res){
        var conect = await connection('diretoria').select('*');    
        return res.json(conect);
    },

    async getDiretoria(req,res){
        const {id} = req.body

        var conect = await connection('diretoria').where('id', id).select('*');    
        return res.json(conect);
    },

    async updateDiretoria(req, res){
        const {id, descricao,id_usuario_resp } = req.body

            var conect = await connection('diretoria')
            .where('id', id)
            .update('descricao',descricao)
            .update('id_usuario_resp',id_usuario_resp)

            if(conect){
                return(res.status(200).json('Alterada com sucesso!'))
            }else{
                return res.status(500).json('Erro ao inserir')
            } 

    }

}
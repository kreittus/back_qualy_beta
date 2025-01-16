const connection = require('../database/connection/connection.js')
module.exports = {

    async CreateUsuario(req, res){
         const {user,senha,email,telefone} = req.body

        var Data = {user,senha,email,telefone}  
        try {

            var conect = await connection('usuario').insert(Data)   
        
            if(conect){
                return(res.status(200).json('Inserido com sucesso!'))
            }else{
                return res.status(401).json('Erro ao inserir')
            } 
            
        } catch (error) {

            return res.status(401).send({
                message: "Falha ao inserir!",
                error:error
            })
            
        }

    },
    
    async getAllUsuarios(req,res){
        var conect = await connection('usuario').select('*');    
        return res.json(conect);
    },

    async getUsuario(req,res){
        const {id} = req.body

        var conect = await connection('usuario').where('id', id).select('*');    
        return res.json(conect);
    },

    async updateUsuario(req, res){
        const {id,user,senha,email,telefone } = req.body

            var conect = await connection('usuario')
            .where('id', id)
            .update('user',user)
            .update('senha',senha)
            .update('email',email)
            .update('telefone',telefone)
            
            if(conect){
                return(res.status(200).json('Alterado com sucesso!'))
            }else{
                return res.status(500).json('Erro ao inserir')
            } 

    }

}
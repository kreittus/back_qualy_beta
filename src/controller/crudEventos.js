const connection = require('../database/connection/connection.js')
module.exports = {

    async CreateEvento(req, res){
         const {titulo } = req.body

        var Data = {titulo}  
        
        var conect = await connection('eventos').insert(Data)   
        
        if(conect){
            return(res.status(200).json('inserido com sucesso!'))
        }else{
            return res.status(500).json('Erro ao inserir')
        } 
    },
    
    async getAllEventos(req,res){
        var conect = await connection('eventos').select('*');    
        return res.json(conect);
    },

    async geteventoEspecfico(req,res){
        const {id} = req.body

        var conect = await connection('eventos').where('id', id).select('*');    
        return res.json(conect);
    },

    async updateEvento(req, res){
        const {id, titulo } = req.body

            var conect = await connection('eventos')
            .where('id', id)
            .update('titulo',titulo)

            if(conect){
                return(res.status(200).json('Alterdado com sucesso!'))
            }else{
                return res.status(500).json('Erro ao inserir')
            } 

    }

}
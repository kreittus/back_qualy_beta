const connection = require('../database/connection/connection.js')
module.exports = {

    async CreatePlanoAcao(req, res){
         const {oQue,porQue,onde,quem,quando,como,quanto} = req.body

        var Data = {oQue,porQue,onde,quem,quando,como,quanto}  
        
        var conect = await connection('planoAcao').insert(Data)   
        
        if(conect){
            return(res.status(200).json('Inserido com sucesso!'))
        }else{
            return res.status(500).json('Erro ao inserir')
        } 
    },
    
    async getAllPlanoAcao(req,res){
        var conect = await connection('planoAcao').select('*');    
        return res.json(conect);
    },

    async getPlanoAcao(req,res){
        const {id} = req.body

        var conect = await connection('planoAcao').where('id', id).select('*');    
        return res.json(conect);
    },

    async updatePlanoAcao(req, res){
        const {id,oQue,porQue,onde,quem,quando,como,quanto} = req.body

            var conect = await connection('planoAcao')
            .where('id', id)
            .update('oQue',oQue)
            .update('porQue',porQue)
            .update('onde',onde)
            .update('quem',quem)
            .update('quando',quando)
            .update('como',como)
            .update('quanto',quanto)

            if(conect){
                return(res.status(200).json('Alterado com sucesso!'))
            }else{
                return res.status(500).json('Erro ao inserir')
            } 

    }

}
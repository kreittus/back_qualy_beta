const connection = require('../database/connection/connection.js')
module.exports = {

    async CreateCausaRaiz(req, res){
         const {
                id_notificacao,
                discussaoMultiprofissional, 
                investigacaoRealizada, 
                maoObra,
                maquina,
                meioAmbiente,
                material,
                medida,
                metodo,
                id_planoAcao
               } = req.body

        var Data = {
                     id_notificacao,
                     discussaoMultiprofissional, 
                     investigacaoRealizada, 
                     maoObra,
                     maquina,
                     meioAmbiente,
                     material,
                     medida,
                     metodo,
                     id_planoAcao
                    }  
        
        var conect = await connection('analiseCausaRaiz').insert(Data)   
        
        if(conect){
            return(res.status(200).json('inserida com sucesso!'))
        }else{
            return res.status(500).json('Erro ao inserir notificação')
        } 
    },
    
    async getAllCausaRaiz(req,res){
        var conect = await connection('analiseCausaRaiz').select('*');    
        return res.json(conect);
    },

    async getCausaRaiz(req,res){
        const {id} = req.body

        var conect = await connection('analiseCausaRaiz').where('id', id).select('*');    
        return res.json(conect);
    },

    async updateCausaRaiz(req, res){
        const {
                id,
                id_notificacao,
                discussaoMultiprofissional, 
                investigacaoRealizada, 
                maoObra,
                maquina,
                meioAmbiente,
                material,
                medida,
                metodo,
                id_planoAcao
              } = req.body

        var conect = await connection('analiseCausaRaiz')
        .where('id', id)
        .update('id_notificacao',id_notificacao)
        .update('discussaoMultiprofissional',discussaoMultiprofissional)
        .update('investigacaoRealizada',investigacaoRealizada)
        .update('maoObra',maoObra)
        .update('maquina',maquina)
        .update('meioAmbiente',meioAmbiente)
        .update('material',material)
        .update('medida',medida)
        .update('metodo',metodo)
        .update('id_planoAcao',id_planoAcao)

        if(conect){
            return(res.status(200).json('Alterado com sucesso!'))
        }else{
            return res.status(500).json('Erro ao inserir notificação')
        } 

    }

}
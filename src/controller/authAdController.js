const ship = require("../config/activeDirectory.js");
const connection = require('../database/connection/connection.js')
const jsonwebtoken = require("jsonwebtoken");
exports.user_authenticate = async (req,res) => {
    const {user, pass, domain="FUNDHOSPAR.LOCAL"} = req.body;


    if(typeof domain !== 'undefined'){
        try { 
            var conect = await connection('usuario').where('user', user).andWhere('senha',pass).select('*');    

            if(conect.length > 0){
                var token = jsonwebtoken.sign(
                    {user : JSON.stringify(user)},
                    process.env.PRIVATE_KEY,
                    { expiresIn : '60m' }
                );
                return res.status(200).json({
                    message: "Autenticado !",
                    id_user: conect[0].id,
                    user:user,
                    token:token
                });
            }    

            await ship.ad.authenticate(user+'@'+domain, pass, 
                async function (err, auth){
                    if(auth){
                        var Data = { "user":user,"senha":pass}  
                        
/*                         ship.ad.getGroupMembershipForUser(user+'@'+domain, function(err, groups) {
                            if (err) {
                              console.log('ERROR: ' +console.log(err));
                              return;
                            }
                           
                            if (! groups) console.log('User:  not found.');
                            else console.log(groups);
                          });
 */
                        var conect = await connection('usuario').insert(Data)  
                        var conect_id = await connection('usuario').select('*').orderBy('id', 'desc');

                        console.log('conectssss')
                        console.log(conect_id[0].id) 
                        var token = jsonwebtoken.sign(
                            {user : JSON.stringify(user)},
                            process.env.PRIVATE_KEY,
                            { expiresIn : '60m' }
                        );
                        return res.status(200).json({ 
                            message: "Autenticado!",
                            id_user: conect_id[0].id, 
                            user:user,
                            token: token
                        }); 
                    }else{
                        return res.status(401).send({
                            message: "Falha na autenticação!",
                            error:err
                        })
                    }
                   
                }
            );

        } catch (err) {
            return res.status(500).send({message: "Erro: "+err})
        }
    }else{
        console.log('usuer_dominio')
        console.log(user+'@'+domain)

        return res.json({message:"Login interno"})
    }
 
}
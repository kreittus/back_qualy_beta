const jsonwebtoken = require("jsonwebtoken");
exports.tokenValited = async (req,resp,next)=>{
    
    if(typeof req.headers.authorization != 'undefined'){
        var [token] = req.headers.authorization.split(' ') || ['',' '] ;
    }else{token = 0}

    

    if(!token || token == 0){
        return resp.status(401).send('Acesso negado! Não existe token de autenticação')
    }

    try {
        const payload = jsonwebtoken.verify(token,process.env.PRIVATE_KEY);
        console.log('payload')
        console.log(payload)
        const userIdFromToken = typeof payload === 'string' && payload.user;

        if(!payload.user && !userIdFromToken){
            return resp.send(401).json({ message: "Token invalido" });
        } 

        req.headers['user']= payload.user

        return next();
    } catch (error) {
        console.log('error')
        console.log(error)
        return resp.status(401).json({ message: 'Token invalido!' })
    }
};
import jwt from 'jsonwebtoken';
import userController from '../controllers/userController.js';
// checagem de autenticacao
const Authorization = async (req, res, next) => {
    // coletar token do cabecalho pra requisicao
    const authToken = req.headers['authorization'];
    if(authToken != undefined){
        const bearer = authToken.split(' ');
        let token = bearer[1];
        // verificar se o token é valido
        jwt.verify(token, userController.JWTSecret, (error, data) => {
            if(error){
                res.status(401).json({error: "Token invalido"});
            } else{
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        });
    } else{
        res.status(401).json({error: "Token invalido"});
    }
};

export default Authorization;

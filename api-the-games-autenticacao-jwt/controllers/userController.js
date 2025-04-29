import userService from '../services/userService.js';
import jwt from 'jsonwebtoken';
const JWTSecret = 'apigamesecret'
// cadastrar usuario
const createUser = async (req, res) => {
    try{
       const { name, email, password } = req.body;
       await userService.Create(name, email, password);
       res.sendStatus(201); // Código 201 (CREATED) 
    } catch(error){
        console.log(error);
        res.sendStatus(500); // Código 500 (INTERNAL SERVER ERROR)
    }

};
// autenticar usuario
const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        // se o email nao etsa vazio
        if(email != undefined){
            const user = await userService.getOne(email);
            if(user != undefined){
                // senha correta
                if(user.password == password){
                    // gerando token
                    jwt.sign({id: user._id, email: user.email}, JWTSecret,
                         {expiresIn: '48h'}, (err, token) => {
                            if(error){
                                res.status(400).json({error: "Erro ao gerar o token"})

                            } else{
                                res.status(200).json({token: token});
                            }
                         })
                } else{
                    res.status(401).json({error: "Credenciais invalidas"}); // 
                }
            } else{
                res.status(404).json({error: "Usuario nao encontrado"});
            }
        } else{
            res.status(400).json({error: "O email é invalido"})
        }
    } catch(error){
        console.log(error);
        res.sendStatus(500); // Código 500 (INTERNAL SERVER ERROR)
    }
}

export default { createUser, loginUser, JWTSecret };
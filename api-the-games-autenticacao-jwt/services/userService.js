import User from "../models/Users.js";
class userService{
    // cadastrar um novo usuário
    async Create(name, email, password){
        try{
            const newUser = new User({
                name, email,
                password
            })
            await newUser.save();
        } catch(error){
            console.log(error);
        }
    }
}

export default new userService();

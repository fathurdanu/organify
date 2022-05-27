const { User, Order, ShoppingCart } = require('../models')
const { decryptPwd } = require('../helpers/bcrypt')
const { tokenGenerator, tokenVerifier } = require('../helpers/jsonwebtoken')

class UserController{
    static async getAllUsers (req, res){
        try{
            let users = await User.findAll({
                include : [ Order, ShoppingCart]
            })
            res.status(200).json(users)
        } catch(err){
            res.status(500).json(err)
        }
    }

    static async register (req, res){
        try{
            const { username, email, password, birthday, gender, avatar, type} = req.body
            let result = await User.create({
                username, email, password, birthday, gender, avatar, type
            })
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }
    }
    static async login(req,res) {
        try{
            const { email, password } = req.body
            let emailFound = await User.findOne({
                where:{ email }
            })
            if(emailFound){
                if(decryptPwd(password, emailFound.password)){
                    let access_token = tokenGenerator (emailFound)
                    res.status(200).json({access_token})
                    let verifyToken = tokenVerifier (access_token)
                    console.log(verifyToken)
                } else {
                    res.status(403).json({
                        message:"Invalid password"
                    })
                }   
            } else {
                res.status(404).json({
                    message:`User not found`
                })
            }
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = UserController
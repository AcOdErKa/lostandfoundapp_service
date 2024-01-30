const user = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const signup = async (req, res) => {
    const {username, password} = req.body
    try {
        const existingUser = await user.findOne({username: username});
        if(existingUser) {
            return res.status(400).json({message: "User Already Exists"})
        }
        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_VALUE))
        const result = await user.create({
            username: username,
            password: hashedPassword
        })
        const token = jwt.sign({_id: result._id,username: result.username, email: result.email, phoneNumber: result.phoneNumber, address: result.address}, process.env.SECRET_KEY)
        res.status(200).json({token: token})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: "Something is wrong. Please try again later"})
    }

}

const signin = async (req, res) => {
    const {username, password} = req.body
    const existingUser = await user.findOne({username: username})
    if(!existingUser) {
        return res.status(404).json({message: "User does not exist"})
    }
    const matchedPassword = await bcrypt.compare(password, existingUser.password)
    if(!matchedPassword) {
        return res.status(400).json({message: "Invalid Credentials"})
    }
    
    const token = jwt.sign({_id: existingUser._id,username: existingUser.username, email: existingUser.email, phoneNumber: existingUser.phoneNumber, address: existingUser.address}, process.env.SECRET_KEY)
    return res.status(200).json({token: token})
}

module.exports = {signin, signup}
import User from "../models/user.model.js"

export const getUser = async (req, res) =>{
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async (req,res)=>{
    const {userName} = req.body;
    const newUser = new User({
        userName
    });

    const saveUser = await newUser.save();
    res.status(200).json(saveUser)
}
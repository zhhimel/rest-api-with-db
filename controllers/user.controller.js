const {v4: uuidv4}=require("uuid")
const User=require("../models/user.model")
const getAllUsers=async (req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).send(err.message);
    }
    
};
const createUser=async (req,res)=>{
    try{
        const newUser=new User({
            id:uuidv4(),
            name:req.body.name,
            age:Number(req.body.age)
        });
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}
const deleteUser=async(req,res)=>{
    try{
        await User.deleteOne({id:req.params.id});
        res.status(200).json({message:"user is deleted"});
    }
    catch(err){
        res.status(500).send(err.message);
    }
}
module.exports={getAllUsers,createUser,deleteUser}
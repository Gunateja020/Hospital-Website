const RegisterModel = require("../models/RegisterModel");
const jwt=require('jsonwebtoken');
const { comparePassword } = require("../helpers/Loginhelper.js");
const LoginController= async (req, res) => {
    try{
        console.log("Login controller responding")

        const {email,password}=req.body;
        const loginUsers= await RegisterModel.findOne({email})

        if(loginUsers){
            const compare= await comparePassword(password,loginUsers.password)
            if(compare){
                const token=await jwt.sign({_id:loginUsers._id},"rohit",{expiresIn:"1d"});
                res.status(200).send({success:true, message:"Logined In",user:loginUsers, role:loginUsers.role, token })
            }
            else{
                res.status(200).send({success:false, message:"Invalid Password"})
            }
        }
        else{
            res.status(200).send({success:false, message:"No User Found"})

        }
    }
    catch(error){
        res.status(500).send({success:false, message:"Error while Login"})
    }
}
module.exports=LoginController

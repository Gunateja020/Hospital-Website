const RegisterModel= require('../models/RegisterModel.js')
const hashPassword = require('../helpers/Registerhelper')
const RegisterController=async(req,res)=>{
    try{
        console.log("Register controller responding")
        
    const {user,luser,email,mobile,password,role}=req.body;
    const reguser= await RegisterModel.findOne({email:req.body.email})
    
    if(reguser){
        return res.status(200).send({
            success:false,
            message:"Already Registered with this Email"
        })
    }
    const hashedPassword= await hashPassword(password)
 
    const newUser=new RegisterModel( {user,luser,email,mobile,"password":hashedPassword,role});
    await newUser.save();
    res.status(201).send({
        success:true,
        message:"Registered Successfully"
    })
    }catch(error){
        res.status(400).send({
            success:false,
            message:"Error while Registering"
        })
    }
}

module.exports=RegisterController
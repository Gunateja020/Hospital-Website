const RegisterModel=require('../models/RegisterModel.js')
const GetDoctorsController=async(req,res)=>{
    try{
        const doctors=await RegisterModel.find({role:"Doctor"})
        if(doctors){
           res.status(200).send({
            success:true,
            message:'Doctor details fetched succesfully',
            user:doctors
           })
        }
        else{
            res.status(200).send({
                success:false,
                message:'No Doctors found',
               })  
        }
    }
    catch(error){
        res.status(404).send({
            success:false,
            message:"Error while fetching the available doctors"
        })
    }
}

module.exports= GetDoctorsController;
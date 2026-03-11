const DonationModel= require("../models/DonationModel")
const DonationController= async (req,res)=>{
    try {
        console.log("Donation controller responding")
        const{firstname,lastname,age,bloodGroup,gender,units,status}=req.body;
        const don=DonationModel({firstname,lastname,age,bloodGroup,gender,units,status})
        await don.save();
        res.status(201).send({
            success:true,
            message:"Thank you for your intrest in Blood donation."
        })
        
    } catch (error) {
        res.status(400).send({
            success:false,
            message:"Error in Blood Donation"
        })
    }
}
module.exports=DonationController
const DonationModel=require("../models/DonationModel.js");
const DocdonController= async (req,res)=>{
    const list = await DonationModel.find()
    if(list){
        res.status(200).send({
            success:true,
            message:list
        })
    }
    else {
        res.ststus(404).send({
            success: false,
        })
    }
}
module.exports=DocdonController;
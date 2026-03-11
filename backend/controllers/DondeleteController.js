const DonationModel= require("../models/DonationModel")
const DondeleteController= async (req,res)=>{
    try {
        const { id } = req.params;
        console.log(id)
        const del = await DonationModel.deleteOne({ _id: id })

        res.status(200).send({
            success: true,
            message: "removed Successfully"
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "failed to remove"
        })
    }
} 
module.exports=DondeleteController;
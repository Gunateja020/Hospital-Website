const AppointmentModel =require("../models/AppointmentModel")
const PrescriptionController= async(req,res)=>{
    try {
        console.log("Prescription Controller responding");
        const {id,prescription}=req.body;
        const doc=await AppointmentModel.find({_id:id})
        doc[0].prescription=prescription
        const pre=await AppointmentModel.findByIdAndUpdate({_id:id},doc[0]);
       
        res.status(200).send({
            success:true,
            message:"Prescription sent "
        })
    } catch (error) {
        res.status(400).send({
            success:true,
            message:"Prescription not sent"
        })
    }
}
module.exports=PrescriptionController;
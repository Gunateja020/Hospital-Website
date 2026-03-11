const AppointmentModel=require("../models/AppointmentModel")
const AppointmentController = async(req,res)=>{
    try {
        console.log("Appointment controller responding")
        const {doctorid,firstname,lastname,age,bloodGroup,gender,appointmentDate,appointmentTime,appointmentReason,status,patientid,prescription}=req.body;
        const appo= new AppointmentModel({doctorid,firstname,lastname,age,bloodGroup,gender,appointmentDate,appointmentTime,appointmentReason,status,patientid,prescription})
        await appo.save()
        res.status(201).send({
            success:true,
            message:"Appointment has been Scheduled"
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            message:"Error in Appointment"
        })
        
    }
}

module.exports=AppointmentController;
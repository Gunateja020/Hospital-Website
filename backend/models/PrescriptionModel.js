const mongoose= require("mongoose")
const PrescriptionModel= mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    patientid:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("prescription",PrescriptionModel)
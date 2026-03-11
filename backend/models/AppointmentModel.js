const mongoose= require("mongoose");
const AppointmentModel=mongoose.Schema({
    doctorid:{
        type:String,
        
    },
    firstname:{
        type:String,
        
    },
    lastname:{
        type:String,
        
    },
    age:{
        type:Number,
        
    },
    bloodGroup:{
        type:String,
        
    },
    gender:{
        type:String,
        
    },
    appointmentDate:{
        type:String,
        
    },
    appointmentTime:{
        type:String,
        
    },
    appointmentReason:{
        type:String,
        
    },
    status:{
        type:String,
        
    },
    patientid:{
        type:String,
        
    },
    prescription:{
        type:String,
        
    }
})
module.exports=mongoose.model("appointments",AppointmentModel)
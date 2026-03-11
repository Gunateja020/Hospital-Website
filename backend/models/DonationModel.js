const mongoose= require("mongoose")
const DonationModel=mongoose.Schema({
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
    units:{
        type:Number,
        
    },
    status:{
        type:String,
        
    }

})

module.exports=mongoose.model("donation",DonationModel)
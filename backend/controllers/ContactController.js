const ContactModel= require("../models/ContactModel.js")
const ContactController=async (req,res)=>{
    try {
        const{name,email,message}=req.body
        const contact=await ContactModel({name,email,message})
        await contact.save()
        res.status(200).send({
            success:true,
            message:"Thank You for your message. <br/> We will revert to you on your Email."
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            message:"Error in contact "+error 
        })
    }
   

}
module.exports=ContactController
const express= require("express") 
const ContactController = require("../controllers/ContactController.js")
const ContactRoute= express.Router()
 console.log('contact route responding')
ContactRoute.post("/contact", ContactController)

module.exports=ContactRoute
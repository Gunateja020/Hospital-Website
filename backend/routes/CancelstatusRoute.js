const CancelstatusController= require("../controllers/CancelstatusController.js")
const express= require("express")
const CancelstatusRoute= express.Router();
console.log("Appointment cancel route responding")
CancelstatusRoute.put("/appdelete/:id", CancelstatusController)

module.exports=CancelstatusRoute
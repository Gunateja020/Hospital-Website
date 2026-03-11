const express= require ("express");
const appointmentRoute=express.Router();
const AppointmentController= require("../controllers/AppointmentController.js")

console.log("Appointment route responding")

appointmentRoute.post("/appointments",AppointmentController)
module.exports=appointmentRoute
const UpdatestatusController= require("../controllers/UpdatestatusController");
const express= require("express")
const UpdatestatusRoute= express.Router()
console.log("Appointment update route responding");

UpdatestatusRoute.put("/appupdate/:id", UpdatestatusController);

module.exports=UpdatestatusRoute;
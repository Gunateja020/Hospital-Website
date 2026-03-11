const DondeleteController= require("../controllers/DondeleteController")
const express= require("express")
const DondeleteRoute=express.Router()
console.log("Donation delete route responding");
DondeleteRoute.delete("/dondelete/:id", DondeleteController)
module.exports=DondeleteRoute
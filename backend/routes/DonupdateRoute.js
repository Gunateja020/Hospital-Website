const DonupdateController= require("../controllers/DonupdateController");
const express= require("express")
const DonupdateRoute= express.Router()
console.log("Donation update route responding");

DonupdateRoute.put("/donupdate/:id", DonupdateController);

module.exports=DonupdateRoute;
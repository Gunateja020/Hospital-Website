const express= require('express')
const DonationController= require("../controllers/DonationController")
const DonationRoute= express.Router()

console.log("Donation route responding");

DonationRoute.post("/donation",DonationController)

module.exports= DonationRoute;
const express=require('express')
const GetDoctorsController=require('../controllers/GetDoctorsController.js')
const GetDoctorsRoute=express.Router();
console.log("Getdoctor route responding");
GetDoctorsRoute.get('/registereddoctors',GetDoctorsController)
module.exports=GetDoctorsRoute
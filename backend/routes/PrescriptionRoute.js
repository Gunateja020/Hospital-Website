const express= require("express");
const prescriptionRoute= express.Router();
const PrescriptionController= require("../controllers/PrescriptionController");

console.log("Prescription route responding")
prescriptionRoute.put("/prescription",PrescriptionController);

module.exports= prescriptionRoute;

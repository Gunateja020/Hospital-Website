const express= require("express");
const DocdonController= require("../controllers/DocdonController.js")
const DocdonRoute= express.Router();

DocdonRoute.get("/docdon",DocdonController);

module.exports= DocdonRoute;
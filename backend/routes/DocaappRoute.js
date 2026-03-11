const DocappController= require("../controllers/DocappController")
const express= require("express");
const DocappRoute= express.Router();

DocappRoute.get("/docapp/:role/:id",DocappController)

module.exports=DocappRoute

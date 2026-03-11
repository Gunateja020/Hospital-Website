const express=require('express')
const LoginController=require('../controllers/LoginController.js')
const loginRoute=express.Router();


console.log("Login route responding")


loginRoute.post('/loginusers',LoginController)
module.exports=loginRoute
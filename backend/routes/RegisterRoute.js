const express=require('express')
const registerRoute=express.Router();
const RegisterController=require('../controllers/RegisterController.js')


console.log("Register route responding")


registerRoute.post('/registeredusers',RegisterController)


module.exports=registerRoute

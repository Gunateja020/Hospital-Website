const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Import all routes
const registerRoute = require('./routes/RegisterRoute.js')
const loginRoute = require('./routes/LoginRoute.js')
const appointmentRoute = require('./routes/AppointmentRoute.js')
const DonationRoute = require('./routes/DonationRoute.js')
const GetDoctorsRoute = require("./routes/GetDoctorsRoute.js")
const ContactRoute = require('./routes/ContactRoute.js')
const DocappRoute = require('./routes/DocaappRoute.js')
const DocdonRoute = require('./routes/DocdonRoute.js')
const UpdatestatusRoute = require('./routes/UpdatestatusRoute.js')
const CancelstatusRoute = require('./routes/CancelstatusRoute.js')
const PrescriptionRoute = require('./routes/PrescriptionRoute.js')
const DonupdateRoute = require('./routes/DonupdateRoute.js')
const DondeleteRoute = require('./routes/DondeleteRoute.js')

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// MongoDB Atlas Connection using environment variable
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    console.error("ERROR: MONGODB_URI environment variable is not set!")
    process.exit(1)
}

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB Atlas database connected successfully")
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message)
    })

// Routes
app.use('/', registerRoute)
app.use('/', appointmentRoute)
app.use('/', loginRoute)
app.use("/", DonationRoute)
app.use("/", GetDoctorsRoute)
app.use("/", ContactRoute)
app.use("/", DocappRoute)
app.use("/", DocdonRoute)
app.use("/", UpdatestatusRoute)
app.use("/", CancelstatusRoute)
app.use("/", PrescriptionRoute)
app.use("/", DonupdateRoute)
app.use("/", DondeleteRoute)

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'Server is running', port: PORT })
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

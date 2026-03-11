const AppointmentModel = require("../models/AppointmentModel.js")
const DocappController = async (req, res) => {
    
    const { role,id } = req.params
    let list=[];
    if(role==="doctor"){
         list = await AppointmentModel.find({ doctorid: id })
    }
    else{
         list = await AppointmentModel.find({ patientid: id })

    }
    if (list) {
        res.status(200).send({
            success: true,
            message: list
        })
    }
    else {
        res.status(200).send({
            success: true,
            message:"no appointments"
        })
    }
}

module.exports = DocappController;
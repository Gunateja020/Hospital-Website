const AppointmentModel = require("../models/AppointmentModel");
const UpdatestatusController = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await AppointmentModel.updateOne({ _id: id }, {
            ...req.body, status: "Completed"
        })
        res.status(200).send({
            success: true,
            message: "Appointment Completed"
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "failed to Complete"
        })
    }
}

module.exports = UpdatestatusController
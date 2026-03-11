const AppointmentModel = require("../models/AppointmentModel")
const CancelstatusController = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await AppointmentModel.updateOne({ _id: id }, {
            ...req.body, status: "Canceled"
        })
        res.status(200).send({
            success: true,
            message: "Appointment removed"
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Error in Appointment"
        })

    }
}
module.exports = CancelstatusController
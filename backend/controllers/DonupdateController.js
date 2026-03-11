const DonationModel = require("../models/DonationModel");
const DonationController = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await DonationModel.updateOne({ _id: id }, {
            ...req.body, status: "Completed"
        })
        res.status(200).send({
            success: true,
            message: "Donation Completed"
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "failed to Complete"
        })
    }
}

module.exports = DonationController
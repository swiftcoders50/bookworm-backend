const Admin = require("../models/Admin");

// Add new book
async function addNewAdmin(req, res) {
	const newAdmin = new Admin(req.body);
	const result = await newAdmin.save();
	res.status(200).json({
		message: "New admin added successfully.",
		newAdminData: result,
	});
}

module.exports = { addNewAdmin };

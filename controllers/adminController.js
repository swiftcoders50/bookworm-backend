const Admin = require("../models/Admin");

// Add new amin
async function addNewAdmin(req, res) {
	const newAdmin = new Admin(req.body);
	const result = await newAdmin.save();
	res.status(200).json({
		message: "New admin added successfully.",
		newAdminData: result,
	});
}

// Get books data
async function getAdmin(req, res) {
	const admin = await Admin.find();
	await res.status(200).json(admin);
}

module.exports = { getAdmin };
// module.exports = { addNewAdmin, getAdmin };

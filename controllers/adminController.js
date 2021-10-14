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
	const admin = await Admin.find({ email: req.body.email });
	if (admin.length > 0) {
		res.status(200).json({ admin: true });
	} else {
		res.status(404).json({ admin: false });
	}
}

module.exports = { addNewAdmin, getAdmin };

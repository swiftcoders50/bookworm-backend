const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
	{
		admin: {
			type: string,
			trim: true,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;

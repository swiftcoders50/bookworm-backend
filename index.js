const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todoHandler = require("./routers/todoHandler");

// express app initialization
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

// database connection with mongoose
mongoose
	.connect(process.env.MONGO_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database Connection Successfully!."))
	.catch((err) => console.log(err));

// application routes
app.use("/todo", todoHandler);

// default error handler
app.listen(process.env.PORT, () => {
	console.log(`App listening to port ${process.env.PORT}.`);
});

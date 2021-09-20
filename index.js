const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const homeRouter = require("./routers/homeRouter");
const booksRouter = require("./routers/booksRouter");

// application initialization
const app = express();
dotenv.config();

app.use(cors());

mongoose
	.connect(process.env.MONGO_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database Connection Successful."))
	.catch((err) => console.log(err));

app.use(express.json());

app.use("/", homeRouter);
app.use("/books", booksRouter);

app.listen(process.env.PORT, () => {
	console.log(`App listening to port ${process.env.PORT}.`);
});

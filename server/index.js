const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const propertyController = require("./routers/propertyController")
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(cors({
    origin: "https://real-estate-wine-ten.vercel.app",
}));

app.use("/api/user", userRouter);
app.use("/api/property", propertyController);

app.get("/", (req, res) => {
	res.send("Welcome to the API")
})

const startServer = async () => {
	// console.log(process.env.MONGODB_URI);
	await mongoose.connect(process.env.MONGODB_URI);
	console.log("MongoDB connection successful");

	app.listen(port, () => {
		console.log(`Server started successfully on port ${port}`);
	})
}

startServer();
const express = require("express");
const tasks = require("./routes/task");
const app = express();
const port = 3000;
const connect = require("./db/connect");

//middlewares
app.use(express.static("./public"))
app.use(express.json());
//routes
app.use("/api/v1/tasks/", tasks);
const start = async () => {
	try {
		await connect();
		app.listen(port, () => {
			console.log("App is listening at", port);
		});
	} catch (error) {
		console.log(error);
	}
};

start();

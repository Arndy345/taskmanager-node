const express = require("express");
const tasks = require("./routes/task");
const app = express();
const port = 3000;

//middlewares

app.use(express.json());
//routes
app.use("/api/v1/tasks/", tasks);

app.listen(port, () => {
	console.log("App is listening at", port);
});

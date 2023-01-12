const getAllTasks = (req, res) => {
	res.send("Welcome home guys");
};
const createTask = (req, res) => {
	res.send("createTask here");
};

const getTask = (req, res) => {
	res.send("Get single task");
};
const updateTask = (req, res) => {
	res.send("Update task");
};
const deleteTask = (req, res) => {
	res.send("Delete task");
};

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	deleteTask,
	updateTask,
};

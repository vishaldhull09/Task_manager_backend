const taskRoutes = require("./tasks/route");

const setupRoutes = (app) => {
    app.use("/api/tasks", taskRoutes);
}

module.exports = setupRoutes;
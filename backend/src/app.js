const express = require("express");
const cors = require("cors");

require("./jobs/reminderJob");

const authRoutes = require("./routes/authRoutes");
const habitRoutes = require("./routes/habitRoutes");
const insightRoutes = require("./routes/insightRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/insights", insightRoutes);

app.use(errorHandler);

module.exports = app;

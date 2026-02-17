import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasksRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

// Basic Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

// Connect DB & Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

import { Router } from "express";
import {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controller/taskController.js";

const router = Router();

// Get all 
router.get("/", getAllTasks);

// Get single 
router.get("/:id", getTask);

// Create 
router.post("/", createTask);

// Update 
router.put("/:id", updateTask);

// Delete 
router.delete("/:id", deleteTask);

export default router;

import { useState } from "react";
import { createTask } from "../services/api";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      await createTask({ title, description });
      await fetchTasks();  
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
      alert("Failed to create task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
  <div className="form-control">
    <input
      type="text"
      placeholder="Task Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="input input-bordered w-full"
    />
  </div>

  <div className="form-control">
    <input
      type="text"
      placeholder="Description (optional)"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="input input-bordered w-full"
    />
  </div>

  <button type="submit" className="btn btn-primary w-full">
    Add Task
  </button>
</form>

  );
};

export default TaskForm;

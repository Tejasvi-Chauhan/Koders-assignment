import { deleteTask, updateTask } from "../services/api";

const TaskItem = ({ task, fetchTasks }) => {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await deleteTask(task._id);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task");
    }
  };

  const toggleStatus = async () => {
    try {
      await updateTask(task._id, {
        status: task.status === "Pending" ? "Completed" : "Pending",
      });
      fetchTasks();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update task");
    }
  };

  return (
  <div className="card bg-base-200 shadow-md">
  <div className="card-body flex flex-row justify-between items-center">
    
    <div>
      <h2 className="card-title">{task.title}</h2>
      <p className="text-sm opacity-70">{task.description}</p>

      <div className="mt-2">
        <span
          className={`badge ${
            task.status === "Completed"
              ? "badge-success"
              : "badge-error"
          }`}
        >
          {task.status}
        </span>
      </div>
    </div>

    <div className="flex gap-2">
      <button
        onClick={toggleStatus}
        className="btn btn-sm btn-info"
      >
        Toggle
      </button>

      <button
        onClick={handleDelete}
        className="btn btn-sm btn-error"
      >
        Delete
      </button>
    </div>
  </div>
</div>

  );
};

export default TaskItem;

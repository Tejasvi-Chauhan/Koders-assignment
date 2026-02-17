import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  useEffect( () => {
       fetchTasks();

  }, []);

  return (
<div className="min-h-screen bg-base-200 flex items-center justify-center">
  <div className="card w-full max-w-2xl bg-base-100 shadow-xl p-6">
    <h1 className="text-3xl font-bold text-center mb-6">
      Task Manager
    </h1>

    <TaskForm fetchTasks={fetchTasks} />

    <div className="mt-6">
      {tasks.length === 0 ? (
        <div className="text-center text-gray-500">
          No tasks yet. Add your first task 
        </div>
      ) : (
        <TaskList tasks={tasks} fetchTasks={fetchTasks} />
      )}
    </div>
  </div>
</div>

  );
};

export default HomePage;

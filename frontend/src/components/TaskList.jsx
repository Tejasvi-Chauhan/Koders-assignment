import TaskItem from "./TaskItem";

const TaskList = ({ tasks, fetchTasks }) => {
  if (!tasks || tasks.length === 0) {
    return (
     <div className="space-y-4 mt-6">
  {tasks.map((task) => (
    <TaskItem
      key={task._id}
      task={task}
      fetchTasks={fetchTasks}
    />
  ))}
</div>

    );
  }

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
};

export default TaskList;

import React, { useState } from "react";
import './App.css'
const App = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(""); // State for input value

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask(""); // Clear the input
    }
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <div className="main-app-container">
        <div className="todo-list">
          <h1>Todo List</h1>
          <div className="input-bar">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter your task"
            />
            <button onClick={handleAddTask}>Add</button>
          </div>
          <div className="list-work">
            {tasks.map((task) => (
              <div key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
                <h2>{task.text}</h2>
                <p>{new Date(task.id).toLocaleTimeString()}</p>
                <button onClick={() => handleCompleteTask(task.id)}>
                  {task.completed ? "Undo" : "Completed"}
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            ))}
            {tasks.length === 0 && <p>No tasks yet. Add one!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

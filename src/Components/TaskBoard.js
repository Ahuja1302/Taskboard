// src/TaskBoard.js
import React, { useState } from 'react';
import './TaskBoard.css';

function TaskBoard() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showTaskForm, setShowTaskForm] = useState(false);

  // Function to add a new task
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
      setShowTaskForm(false);
    }
  };

  return (
    <div className="task-board">
      <h1>My Tasks</h1>
      <button onClick={() => setShowTaskForm(true)}>+ New Task</button>

      {showTaskForm && (
        <div className="task-form">
          <input
            type="text"
            placeholder="Task Name"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
          <button onClick={() => setShowTaskForm(false)}>Cancel</button>
        </div>
      )}

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskBoard;

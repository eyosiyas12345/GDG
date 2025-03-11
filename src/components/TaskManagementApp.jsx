import React, { useState } from 'react';
import '../App.css'; // Create this CSS file

function TaskManagementApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  });
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const addTask = () => {
    if (newTask.title.trim() === '') return;
    if (editTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = newTask;
      setTasks(updatedTasks);
      setEditTaskIndex(null);
    } else {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
    }
    setNewTask({ title: '', description: '', dueDate: '', completed: false });
  };

  const editTask = (index) => {
    setNewTask({ ...tasks[index] });
    setEditTaskIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditTaskIndex(null); // Clear edit index if deleting the edited task
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-management-app">
      <h1>Task Management App</h1>
      <div className="task-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <label>
          Completed:
          <input
            type="checkbox"
            name="completed"
            checked={newTask.completed}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={addTask}>{editTaskIndex !== null ? 'Update Task' : 'Add Task'}</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={task.id || index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ?'Mark Complete': 'Mark Incomplete'  }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskManagementApp;
import React, { useState } from 'react'

function Task10() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    const addTask = () => {
      if (task.trim()) {
        setTasks([...tasks, task]);
        setTask("");
      }
    };
  
    const removeLastTask = () => {
      setTasks(tasks.slice(0, -1));
    };
  return (
    <>
        <h6>Task12</h6>
        <input 
        type="text" 
        placeholder="Enter a task..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
      />
      <button 
        onClick={addTask}
      >
        Add Task
      </button><br></br>
      <button 
        onClick={removeLastTask}
      >
        Remove Last Task
      </button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </>
  )
}

export default Task10
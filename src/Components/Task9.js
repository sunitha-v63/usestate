import React, { useState } from 'react'

function Task9() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    const addTask = () => {
      if (task.trim()) {
        setTasks([...tasks, task]);
        setTask("");
      }
    };

  

  return (
    <>
        <h6>Task10 & Task11</h6>
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
      </button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
     
    </>
  )
}

export default Task9
import React, { useState } from 'react'

function Task11() {
    const [state, setState] = useState({ tasks: [], task: "" });

    const addTask = () => {
      if (state.task.trim()) {
        setState({ ...state, tasks: [...state.tasks, state.task], task: "" });
      }
    };
  
    const removeLastTask = () => {
      setState({ ...state, tasks: state.tasks.slice(0, -1) });
    };
  return (
    <><h6>Task13</h6>
    <h6>Mini-project</h6>
    
    <input 
        type="text" 
        placeholder="Enter a task..." 
        value={state.task} 
        onChange={(e) => setState({ ...state, task: e.target.value })}
      /><br></br>
      <button 
        onClick={addTask}
      >
        Add Task
      </button>
      <button 
        onClick={removeLastTask}
      >
        Remove
      </button>
      <div>
        {state.tasks.length === 0 ? (
          <p>List is empty</p>
        ) : (
          <ul>
            {state.tasks.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        )}
      </div></>
  )
}

export default Task11
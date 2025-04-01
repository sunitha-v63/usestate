import React from 'react'

function Task18() {
    const handleClick = (name) => { 
        alert(`Hello, ${name}`); 
      }; 
  return (
    <div>
        <h6>Task6</h6>
        <button onClick={() => handleClick("viyona")}>Click Me</button>
    </div>
  )
}

export default Task18
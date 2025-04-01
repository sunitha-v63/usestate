import React from 'react'

function Task16() {
    const handleClick = (name) => { 
        alert(`hi, ${name}`); 
      }; 
  return (
    <>
        <h6>Task4</h6>
        <p>Inline Event Handler</p>
        <button onClick={() => handleClick("welcome")}>Click Me</button>
    </>
  )
}

export default Task16
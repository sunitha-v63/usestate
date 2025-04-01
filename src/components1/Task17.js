import React from 'react'

function Task17() {
    const handleChange = (e) => { 
        console.log("Input Value:", e.target.value); 
      }; 
  return (
    <div>
        <h6>Task5</h6>
        <h4>Event Object:</h4>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Task17
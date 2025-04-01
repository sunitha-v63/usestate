import React from 'react'

function Task20() {
    const handleSubmit = (e) => { 
        e.preventDefault();
        alert("Form Submitted!"); 
      };
  return (
    <>
        <h6>Task8 & task 9</h6>
        <form onSubmit={handleSubmit}> 
      <input type="text" placeholder="Enter name" /> 
      <button type="submit">Submit</button> 
    </form> 
    </>
  )
}

export default Task20
import React from 'react'

function Task14() {
    const handle=()=>{
        alert("button clicked")
    }
  return (
    <>
        <h6>Task2</h6>
        <h4>Button Click Event:</h4>
    <button onClick={handle}>click</button>
    </>
  )
}

export default Task14
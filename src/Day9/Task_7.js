import React from 'react'

function Task_7() {
    const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
  return (
    <>
        <h6>Task_7 & Task_8</h6>
        <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    </>
  )
}

export default Task_7
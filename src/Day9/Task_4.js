import React from 'react'

function Task_4() {
    const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <>
        <h6>Task_4</h6>
        <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
  )
}

export default Task_4
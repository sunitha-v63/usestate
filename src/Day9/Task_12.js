import React, { useState } from 'react'

function Task_12() {
    const generateNumbers = () => 
        Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    
      const [numbers, setNumbers] = useState(generateNumbers());
  return (
    <>
        <h6>mini project</h6>
        <h2>Numbers Greater Than 50</h2>
      <ul>
        {numbers
          .filter((num) => num > 50)
          .map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>
      <button onClick={() => setNumbers(generateNumbers())}>Generate New Numbers</button>
        </>
  )
}

export default Task_12
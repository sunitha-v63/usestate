import React from 'react'

export default function Task_10() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
        <h6>Task_12</h6>
        <ul>
      {numbers.map((num, index) =>
        num % 2 === 0 ? <li key={index}>{num}</li> : null
      )}
    </ul>
    </>
  )
}

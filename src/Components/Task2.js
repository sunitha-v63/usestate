import React, { useState } from 'react'

function Task2() {
    const[count,setcount]=useState(0)
  return (
    <>
    <h6>Task3</h6>
    <h4>count:{count}</h4>
    <button onClick={()=>{setcount(count+1)}}>click</button>
    </>
  )
}

export default Task2
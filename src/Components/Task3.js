import React, { useState } from 'react'

function Task3() {
    const[incr,setincr]=useState(10)
 
  return (
    <>
    <h6>Task4</h6>
    <h4>{incr}</h4>
    <button onClick={()=>{setincr(incr+1)}}>+</button>
  </>
  )
}

export default Task3
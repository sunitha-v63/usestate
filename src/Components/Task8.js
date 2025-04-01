import React, { useState } from 'react'

function Task8() {
    const[count,setcount]=useState(0)
  return (
    <>
        <h6>Task9</h6>
        <h4>{count}</h4>
        <button onClick={()=>{setcount(count+1)}}>add</button>
        <button onClick={()=>setcount(0)}>reset</button>

    </>
  )
}

export default Task8
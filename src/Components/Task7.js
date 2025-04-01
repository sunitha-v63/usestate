import React, { useState } from 'react'

function Task7() {
    const[text,setText]=useState("")
  return (
    <>
        <h6>Task8</h6>
        <h4>{text}</h4>
        <input type="text" value={text} placeholder='Enter your text' onChange={(e)=>setText(e.target.value)}/>
    </>
  )
}

export default Task7
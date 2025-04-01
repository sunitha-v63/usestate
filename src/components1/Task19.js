import React, { useState } from 'react'

function Task19() {
        const [text, setText] = useState(""); 
  return (
    <div>
        <h6>Task7</h6>
        <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      /> 
      <p>You typed: {text}</p> 
    </div>
  )
}

export default Task19
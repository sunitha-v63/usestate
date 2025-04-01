import React, { useState } from 'react'

function Task12() {
    const [isLightOn, setIsLightOn] = useState(true);
  return (
    
    <>
    <h6>mini project:4</h6>
    <h3>{isLightOn ? 'on' : 'off'}</h3>
      <button  onClick={() => setIsLightOn(!isLightOn)}
      >
        Toggle Light
      </button>
    </>
    
  )
}

export default Task12
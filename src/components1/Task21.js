import React, { useState } from 'react'

function Task21() {
    
     const [isLightOn, setIsLightOn] = useState(true);
    
      const toggleLight = () => {
        setIsLightOn(!isLightOn);
      };
  return (
    <div>
        <h6>Task10,11</h6>
        <h4>paragragh</h4>
      <p style={{color:"gray"}}>{isLightOn ? "on" : "off"}</p>
      <button onClick={toggleLight}>change</button>
    </div>
  )
}

export default Task21
import React, { useState } from 'react'

function Task6() {
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
  return (
    <div>
        <h6>Task7</h6>
        {isVisible && <h3>Content is Visible</h3>}
        <button 
        onClick={toggleVisibility}
      >
        Toggle Visibility
      </button>
    </div>
  )
}

export default Task6
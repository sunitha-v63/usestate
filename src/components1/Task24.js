import React, { useState } from 'react'

function Task24() {

    const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };
  return (
    <div>
        <h6>Task13</h6>
        <button  
        onClick={handleClick} 
        disabled={isDisabled}
      >
        {isDisabled ? 'Button Disabled' : 'Click Me'}
      </button>
    </div>

  )
}

export default Task24
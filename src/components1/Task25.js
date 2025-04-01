import React, { useState } from 'react'

function Task25() {
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <div>
        <h6>mini project</h6>
        <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700" 
        onClick={handleClick} 
        disabled={isClicked}
      >
        {isClicked ? 'Button Clicked' : 'Click Me'}
      </button>
    </div>
  )
}

export default Task25
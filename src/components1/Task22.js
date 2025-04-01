import React from 'react'

function Task22() {
    const handleKeyPress = (e) => {
        console.log('Key Pressed:', e.key);
      };
  return (
    <div>
        <h6>Task12</h6>
        <input 
        type="text"  
        placeholder="Press any key..." 
        handleKeyPress={handleKeyPress} 
      />
    </div>
  )
}

export default Task22
import React, { useState } from 'react'

function Task4() {
    const [name, setName] = useState("viyona");

  const handleNameChange = () => {
    setName("yatvin");
  };
  return (
    <>
        <h6>Task5</h6>
        <h4>Name:{name}</h4>
        <button onClick={handleNameChange}>view</button>
    </>
  )
}

export default Task4
import React, { useState } from 'react'

function Task5() {
    const [name, setName] = useState("sunitha");
    const [age, setAge] = useState(25);
  
    const NameChange = () => {
      setName("vijay");
    };
  
    const AgeChange = () => {
      setAge(age + 1);
    };
  return (
    <>
    <h6>Task6</h6>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <button onClick={NameChange}>name</button>
    <button onClick={AgeChange}>age</button>
    </>
  )
}

export default Task5
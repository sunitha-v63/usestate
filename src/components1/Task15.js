import React, { useState } from "react";

function Task15() {
  const [isLightOn, setIsLightOn] = useState(true);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };
  return (
    <>
      <h6>Task3</h6>
      <h4>Function Binding in Functional Components</h4>
      <p style={{color:"gray"}}>{isLightOn ? "right" : "Left"}</p>
      <button onClick={toggleLight}>change</button>
    </>
  );
}

export default Task15;

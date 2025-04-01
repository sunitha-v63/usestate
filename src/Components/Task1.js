import React from "react";

function Task1() {
  return (
    <>
    <h2>USE_STATE</h2>
      <h6>Task1</h6>
      <p>
        STATE: State is a built-in React object used to store and manage dynamic
        data in a component. A component's state can change over time; whenever
        it changes, the component re-renders.
      </p>
      <p>
        A component's state can change over time; whenever it changes, the
        component re-renders.
      </p>
      <h6>Task2</h6>
      <h3 style={{color:"blue"}}>State vs. Props:</h3>
      <ol>
        <li>Mutability</li>
        <ul>
          <li>props:Immutable; cannot be modified by child components</li>
          <li>state:Mutable; can be updated by the component itself</li>
        </ul>
       <li>Ownership</li>
        <ul>
          <li>props:Owned and managed by the parent component and passed down to children</li>
          <li>state:Owned and managed by the component itself</li>
        </ul>
      <li>Purpose</li>
        <ul>
          <li>props:Used for passing data and configuration to child components</li>
          <li>state:Used for managing component-specific data and UI state changes</li>
        </ul>
      </ol>
   
    </>
  );
}

export default Task1;

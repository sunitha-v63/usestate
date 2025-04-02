import React from 'react'

function Task_8() {
    const users = [
        { id: 1, name: "viyona" },
        { id: 2, name: "yatvin" },
        { id: 3, name: "vijay" },
      ];
    return (
    <>
        <h6>Task_9 & Task_10</h6>
        <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  )
}

export default Task_8
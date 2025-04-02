import React from 'react'

function Task_9() {
    const users = [
        { id: 1, name: "viyona", age: 25 },
        { id: 2, name: "yatvin", age: 30 },
        { id: 3, name: "vijay", age: 28 },
      ];
  return (
    <>
        <h6>Task_11</h6>
        <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Task_9
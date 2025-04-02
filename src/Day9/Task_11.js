import React from 'react'

function Task_11() {
    const categories = [
        { 
          id: 1, 
          name: "Fruits", 
          items: ["Apple", "Banana"] 
        },
        { 
          id: 2, 
          name: "Vegetables", 
          items: ["Carrot","Spinach"] 
        }
      ];
  return (
    <>
        <h6>Task_13</h6>
        <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <strong>{category.name}</strong>
          <ul>
            {category.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Task_11
import { useState } from 'react'
import './App.css'
import React from 'react'
import Todo from '../componenet/Todo'

function App() {
  const [todo, setTodo] = useState([{
    key: 1,
    Tittle:"Go to gym",
    description:"Going to gym at 6.am",
    completed:false
  },
  {
    key:2,
    Tittle:"DSA ",
    description:"Learning DSA at 8.am",
    completed:false
  }, 
])
  const todoMain = todo.map(todo => {
    return(
      <Todo  
      key={todo.key}
      title={todo.Tittle} 
      description={todo.description} 
      completed={todo.completed}/>
    )
  })
  function onClickHandler(){
    setTodo([...todo,{
      key: Date.now(),
      Tittle:"new title ",
       description:"Learning DSA at 8.am"
    }])
    console.log(...todo)
  }
  
 
  return (
    <>
    <button onClick={onClickHandler}>Add a random todo</button>
    {todoMain}
    </>
  )
}
export default App

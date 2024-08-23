import { useState } from "react"

const Usestateexample =()=>{
    useState([{
        period:"morning",
        todo:"woke up at 8am"
    },
        {

        period:"syamn",
        todo:"eat lunch at 1pm"
        }
  ])
  const todoHndler=(todo)=>{
    console.log(todo)
  };
    return(
        <>
        <h3>usestate example 2</h3>
        <button onClick={()=>{todoHndler(todo)}}>addTodo</button>
        {
            todo.map(eachTodo=>{
                return(
                    <>
                    <h1>current period{eachTodo.period}</h1>
                    <h1>current period{eachTodo.todo}</h1>
                    </>
                )
            })
        }
        </>
    )
}
export default Usestateexample
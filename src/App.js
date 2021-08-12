import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [todo, setTodo] = React.useState("")
  const [todoList, setList] = React.useState([])

  function onsubmitHandler(e) {
  e.preventDefault()
    const AddTodo = {
      id: new Date().getTime(),
      todoName: todo,
      complete: false
    }
    setList([...todoList].concat(AddTodo))
    setTodo("")
    console.log(todoList); 
  }
  function deleteTodo(id){
    let updatedList=[...todoList].filter((todo)=>todo.id !==id)
    setList(updatedList)

  }

  function completeTodo(id){ 
    let updatedList=[...todoList].map((todo)=>{
      if (todo.id===id){
        todo.complete=!todo.complete
      }
      return todo
    })
    setList(updatedList )
    console.log(todoList);


  }

  return (
    <div className="todo">
      <h1> To Do </h1>
      <form onSubmit={onsubmitHandler}>
        <input
          type="text"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}/>

        <button> Add</button>
      </form>

      {todoList.map((data) => {
        <div key={data.id}>
          <li>
            {data.todoName}
            <button onClick={()=>deleteTodo(data.id)}>Delete</button>
            <button onClick={()=>completeTodo(data.id)}>Complete</button>


          </li>
        </div>
      })}

    </div>
  );
}

export default App;

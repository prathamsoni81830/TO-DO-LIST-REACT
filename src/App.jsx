
import './App.css'
import Header from './components/Header'
import Form from "./components/Form"
import {useState} from 'react'
import Todolist from './components/Todolist'

const App = () => {
  const[input,setInput]=useState("")
  const[todos,setTodos]=useState([])
  const[editTodo,setEditTodo]=useState(null)
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <div>
          <Header/>
          </div>
          <div>
            <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <Todolist 
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

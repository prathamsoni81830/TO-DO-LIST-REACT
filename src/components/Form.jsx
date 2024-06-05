import {v4 as uuidv4} from "uuid"
import {useEffect} from 'react'
const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) =>{

   const updateTodo = (title,id,completed) => {
     const newTodo=todos.map((todo) => 
     todo.id===id ? {title,id,completed} : todo
    )
    setTodos(newTodo);
    setEditTodo("");
   }
   useEffect(()=>{
    if(editTodo){
      setInput(editTodo.title)
    }
    else{
      setInput("")
    }
   },[setInput,editTodo])

   const onInputChange = (event) => {
    setInput(event.target.value)
   }

  const onFormSubmit = (e) =>{
    e.preventDefault();
    if(!editTodo){
      setTodos([ ...todos,{id:uuidv4(),title:input,completed:false}])
      setInput("");
    } else{
       updateTodo(input,editTodo.id,editTodo.completed) 
      }
    setTodos([ ...todos,{id:uuidv4(),title:input,completed:false}])
    setInput(""); 
  }
  return(
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="What is the Task Today?" className="task-input" value={input} required onChange={onInputChange}>
      </input>
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  )
}
export default Form
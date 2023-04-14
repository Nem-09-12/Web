import { useStore, actions } from './index'


export default function TodoApp() {

  const [state, dispatch, ref] = useStore()
  const { todos, todoInput } = state

  const handleAdd = () => {
    dispatch(actions.addTodoInput(todoInput))
    ref.current.focus()
  }

  const handleDelete = (id) => {
    dispatch(actions.deleteTodoInput(id))
    ref.current.focus()
  }

  console.log(todos)

  return (
    <div>
      <input 
        ref={ref}
        value={todoInput}
        type="text" 
        placeholder='type something'
        onChange={e=>{
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index)=>(
          <li key={index}>
            {todo} 
            <span onClick={() => handleDelete(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
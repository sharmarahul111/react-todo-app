import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

let todoId = 2
let initialTodo = [
	{id:0,text: "buy rice",checked: false},
	{id:1, text: "potato", checked: true}
]
function App() {
	let [todos, setTodos] = useState(initialTodo)
	function handleAddTodo(todoText){
		setTodos([
			...todos,
			{
				id:todoId++,
				text: todoText,
				checked: false
			}
		])
	}
	function handleTodoChange(){

	}
	function handleDeleteTodo(todoId){

	}
	return (
		<>
			<h1 className="text-center text-3xl py-4 font-bold ">Todo App</h1>
			<br />
			<AddTodo onAddTodo={handleAddTodo}/>
			<br />
			<TodoList list={todos} onTodoChange={handleTodoChange} onDeleteTodo={handleDeleteTodo} />
		</>
	);
}

export default App;

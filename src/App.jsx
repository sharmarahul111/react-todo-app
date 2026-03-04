import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
function App() {

	return (
		<>
			<h1 className="text-center text-3xl py-4 font-bold ">Todo App</h1>
			<br />
			<AddTodo/>
			<br />
			<TodoList/>
		</>
	);
}

export default App;

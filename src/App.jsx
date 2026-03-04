import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

let initialTodo = [];
function App() {
	let [todos, setTodos] = useState(initialTodo);
	function handleAddTodo(todoText) {
		setTodos((prev) => [
			...prev,
			{
				id: Date.now(),
				text: todoText,
			},
		]);
	}
	function handleTodoChange(newTodo) {
		setTodos((prev) =>
			prev.map((todo) => {
				if (newTodo.id != todo.id) {
					return todo;
				} else {
					return {
						...todo,
						text: newTodo.text,
					};
				}
			}),
		);
	}
	function handleDeleteTodo(todoId) {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	}
	return (
		<>
			<h1 className="text-center text-3xl py-4 font-bold ">Todo App</h1>
			<br />
			<AddTodo onAddTodo={handleAddTodo} />
			<br />
			<TodoList
				list={todos}
				onTodoChange={handleTodoChange}
				onDeleteTodo={handleDeleteTodo}
			/>
		</>
	);
}

export default App;

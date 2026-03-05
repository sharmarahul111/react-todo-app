import { useState } from "react";
export default function AddTodo({ onAddTodo }) {
	let [todo, setTodo] = useState("");
	function handleAddTodo() {
		if (todo.trim() !== "") {
			onAddTodo(todo.trim());
			setTodo("");
		}
	}
	return (
		<div className="flex items-center max-w-md border-2 border-blue-500 p-2 rounded-2xl mx-auto">
			<input
				type="text"
				className="text-white h-full w-full outline-none"
				placeholder="Add Todo..."
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key == "Enter") {
						handleAddTodo();
					}
				}}
			/>
			<button
				className="w-20 font-bold px-7 text-center py-2 bg-blue-500 rounded-2xl"
				onClick={handleAddTodo}
			>
				Add
			</button>
		</div>
	);
}

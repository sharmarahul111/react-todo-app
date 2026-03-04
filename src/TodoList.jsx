import { useState } from "react";
export default function TodoList({ list, onTodoChange, onDeleteTodo }) {
	if (list.length == 0) {
		return (
			<div className="flex items-center justify-center max-w-xl border-2 border-blue-500 p-2 rounded-2xl mx-auto">
				<h3 className="text-gray-400 text-lg text-center">
					Add todo...
				</h3>
			</div>
		);
	}
	return (
		<div className="flex items-center max-w-xl border-2 border-blue-500 p-2 rounded-2xl mx-auto">
			<ul className="w-full">
				{list.map((li) => {
					return (
						<Task
							key={li.id}
							li={li}
							onTodoChange={onTodoChange}
							onDeleteTodo={() => {
								onDeleteTodo(li.id);
							}}
						/>
					);
				})}
			</ul>
		</div>
	);
}
function Task({ onTodoChange, onDeleteTodo, li }) {
	let [edit, setEdit] = useState(false);
	let content = (
		<li className="w-full flex items-center justify-between h-12 border-b-blue-500 outline-none p-4 hover:bg-blue-800 rounded-2xl">
			<label className="w-full px-5 py-2 text-lg">{li.text}</label>
			<Control edit={true} setEdit={setEdit} onDeleteTodo={onDeleteTodo} />
		</li>
	);
	if (edit) {
		content = (
			<li className="w-full flex items-center justify-between h-12 border-b-blue-500 outline-none p-4 rounded-2xl">
				<input
					className="w-full px-3 text-lg border-2 rounded-2xl mx-3"
					value={li.text}
					onChange={(e) => {
						onTodoChange({
							...li,
							text: e.target.value,
						});
					}}
				/>
				<Control edit={false} setEdit={setEdit} onDeleteTodo={onDeleteTodo} />
			</li>
		);
	}
	return content;
}
function Control({ edit, setEdit, onDeleteTodo }) {
	return (
		<>
			<div className="flex justify-center items-center">
				<Button onClick={() => setEdit(edit)}>{edit?"Edit":"Save"}</Button>
				<Button onClick={onDeleteTodo}>Delete</Button>
			</div>
		</>
	);
}
function Button({ onClick, children }) {
	return (
		<button
			onClick={onClick}
			className="w-20 font-bold px-3 mx-1 text-center py-1 bg-blue-500 hover:bg-blue-900 rounded-2xl"
		>
			{children}
		</button>
	);
}

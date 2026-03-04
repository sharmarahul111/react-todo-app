export default function TodoList({list, onTodoChange, onDeleteTodo}) {
	return (
		<div className="flex items-center max-w-xl border-2 border-blue-500 p-2 rounded-2xl mx-auto">
			<ul className="w-full">
				{list.map((li => {
					return <Task key={li.id} onTodoChange={onTodoChange} onDeleteTodo={()=>{
						onDeleteTodo(li.id)
					}}>{li.text}</Task>
				}))}
			</ul>
		</div>
	);
}
function Task({onTodoChange, onDeleteTodo, children}) {

	return (
		<li className="w-full flex items-center justify-between h-12 border-b-blue-500 outline-none p-4 hover:bg-blue-400 rounded-2xl">
			<input type="checkbox" className="w-10 h-10 m-1 accent-blue-500" />
			<label className="w-full px-5 py-2 text-lg">{children}</label>
			<div className="flex justify-center items-center">
				<Button onClick={onTodoChange}>Edit</Button>
				<Button onClick={onDeleteTodo}>Delete</Button>
			</div>
		</li>
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

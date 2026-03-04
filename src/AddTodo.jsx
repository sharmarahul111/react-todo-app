export default function AddTodo() {
	return (
		<div className="flex items-center max-w-md border-2 border-blue-500 p-2 rounded-2xl mx-auto">
			<input type="text" className="text-white h-full w-full outline-none" placeholder="Add Todo..."/>
			<button className="w-20 font-bold px-7 text-center py-2 bg-blue-500 rounded-2xl">Add</button>
		</div>
	);
}
